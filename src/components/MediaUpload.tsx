import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Image, Video, X } from "lucide-react";
import { AudioRecorder } from "./AudioRecorder";
import { useToast } from "@/hooks/use-toast";

interface MediaUploadProps {
  onMediaSelect: (file: File | Blob, type: "image" | "video" | "audio") => void;
  selectedMedia: { file: File | Blob; type: string; preview?: string } | null;
  onClearMedia: () => void;
}

export const MediaUpload = ({
  onMediaSelect,
  selectedMedia,
  onClearMedia,
}: MediaUploadProps) => {
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: "image" | "video") => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      toast({
        title: "Bestand te groot",
        description: "Maximum bestandsgrootte is 50MB",
        variant: "destructive",
      });
      return;
    }

    onMediaSelect(file, type);
  };

  const handleAudioRecording = (audioBlob: Blob) => {
    onMediaSelect(audioBlob, "audio");
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFileSelect(e, "image")}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => document.getElementById("image-upload")?.click()}
          title="Foto uploaden"
        >
          <Image className="h-4 w-4" />
        </Button>

        <input
          type="file"
          id="video-upload"
          accept="video/*"
          className="hidden"
          onChange={(e) => handleFileSelect(e, "video")}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => document.getElementById("video-upload")?.click()}
          title="Video uploaden"
        >
          <Video className="h-4 w-4" />
        </Button>

        <AudioRecorder onRecordingComplete={handleAudioRecording} />
      </div>

      {selectedMedia && (
        <div className="relative">
          {selectedMedia.type === "image" && selectedMedia.preview && (
            <div className="relative">
              <img
                src={selectedMedia.preview}
                alt="Preview"
                className="max-h-48 rounded-lg"
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={onClearMedia}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
          {selectedMedia.type === "video" && selectedMedia.preview && (
            <div className="relative">
              <video
                src={selectedMedia.preview}
                controls
                className="max-h-48 rounded-lg"
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={onClearMedia}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
          {selectedMedia.type === "audio" && (
            <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
              <audio controls className="flex-1">
                <source src={selectedMedia.preview} type="audio/webm" />
              </audio>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={onClearMedia}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
