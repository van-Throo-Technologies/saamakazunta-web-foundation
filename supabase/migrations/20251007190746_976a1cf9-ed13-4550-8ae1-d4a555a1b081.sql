-- Create storage bucket for media uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('gaangaza-media', 'gaangaza-media', true);

-- Create RLS policies for the media bucket
CREATE POLICY "Authenticated users can upload media"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'gaangaza-media' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Media is publicly accessible"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'gaangaza-media');

CREATE POLICY "Users can update their own media"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'gaangaza-media' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own media"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'gaangaza-media' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Add media columns to posts table
ALTER TABLE posts ADD COLUMN IF NOT EXISTS media_type text;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS media_url text;

-- Add check constraint for media types
ALTER TABLE posts ADD CONSTRAINT media_type_check 
CHECK (media_type IS NULL OR media_type IN ('image', 'video', 'audio'));