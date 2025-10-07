import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Heart, MessageCircle, Send } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { nl } from "date-fns/locale";
import { MediaUpload } from "@/components/MediaUpload";

interface Profile {
  id: string;
  username: string;
  full_name: string | null;
  avatar_url: string | null;
}

interface Post {
  id: string;
  content: string;
  created_at: string;
  likes_count: number;
  comments_count: number;
  user_id: string;
  media_type: string | null;
  media_url: string | null;
  profiles: Profile;
}

const Community = () => {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<{ file: File | Blob; type: string; preview?: string } | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
      } else {
        setUser(user);
      }
    };
    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchPosts();

      const channel = supabase
        .channel('posts-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'posts'
          },
          () => fetchPosts()
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        profiles (
          id,
          username,
          full_name,
          avatar_url
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Fout bij laden posts",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setPosts(data || []);
    }
  };

  const handleMediaSelect = (file: File | Blob, type: "image" | "video" | "audio") => {
    const preview = URL.createObjectURL(file);
    setSelectedMedia({ file, type, preview });
  };

  const handleClearMedia = () => {
    if (selectedMedia?.preview) {
      URL.revokeObjectURL(selectedMedia.preview);
    }
    setSelectedMedia(null);
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!newPost.trim() && !selectedMedia) || !user) return;

    setLoading(true);

    try {
      let mediaUrl = null;
      let mediaType = null;

      // Upload media if present
      if (selectedMedia) {
        const fileExt = selectedMedia.type === "audio" ? "webm" : selectedMedia.file instanceof File ? selectedMedia.file.name.split('.').pop() : selectedMedia.type;
        const fileName = `${user.id}/${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('gaangaza-media')
          .upload(fileName, selectedMedia.file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('gaangaza-media')
          .getPublicUrl(fileName);

        mediaUrl = publicUrl;
        mediaType = selectedMedia.type;
      }

      const { error } = await supabase
        .from('posts')
        .insert([
          {
            content: newPost,
            user_id: user.id,
            media_url: mediaUrl,
            media_type: mediaType,
          }
        ]);

      if (error) throw error;

      setNewPost("");
      handleClearMedia();
      toast({
        title: "Post geplaatst!",
        description: "Je bericht is succesvol gedeeld.",
      });
    } catch (error: any) {
      toast({
        title: "Fout bij plaatsen post",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleLike = async (postId: string) => {
    if (!user) return;

    const { error } = await supabase
      .from('post_likes')
      .insert([{ post_id: postId, user_id: user.id }]);

    if (error) {
      if (error.code === '23505') {
        const { error: deleteError } = await supabase
          .from('post_likes')
          .delete()
          .match({ post_id: postId, user_id: user.id });

        if (!deleteError) {
          fetchPosts();
        }
      }
    } else {
      fetchPosts();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gaangaza</h1>
          <Button onClick={handleLogout} variant="outline">
            Uitloggen
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-semibold">Deel je gedachten</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <Textarea
                placeholder="Waar denk je aan?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-[100px]"
              />
              <MediaUpload
                onMediaSelect={handleMediaSelect}
                selectedMedia={selectedMedia}
                onClearMedia={handleClearMedia}
              />
              <Button type="submit" disabled={loading || (!newPost.trim() && !selectedMedia)}>
                <Send className="mr-2 h-4 w-4" />
                Plaatsen
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.profiles.avatar_url || undefined} />
                    <AvatarFallback>
                      {post.profiles.username.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">
                      {post.profiles.full_name || post.profiles.username}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      @{post.profiles.username} ·{" "}
                      {formatDistanceToNow(new Date(post.created_at), {
                        addSuffix: true,
                        locale: nl,
                      })}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {post.content && <p className="whitespace-pre-wrap">{post.content}</p>}
                {post.media_type === "image" && post.media_url && (
                  <img
                    src={post.media_url}
                    alt="Post media"
                    className="rounded-lg max-h-96 w-full object-cover"
                  />
                )}
                {post.media_type === "video" && post.media_url && (
                  <video
                    src={post.media_url}
                    controls
                    className="rounded-lg max-h-96 w-full"
                  />
                )}
                {post.media_type === "audio" && post.media_url && (
                  <audio controls className="w-full">
                    <source src={post.media_url} type="audio/webm" />
                  </audio>
                )}
              </CardContent>
              <CardFooter className="gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  {post.likes_count}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {post.comments_count}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
