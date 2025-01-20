// <Field {...form} name="image" label="Image">
//   <ImageUpload
//     onImageChange={(file) => {
//       field.onChange(file);
//       if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           setImagePreview(reader.result as string);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         setImagePreview(null);
//       }
//     }}
//     imagePreview={imagePreview}
//   />
// </Field>

import { ChangeEvent, useState } from 'react';
import { Button } from '~/components-shadcn/button';
import { Image } from '~/components-shadcn/typography';

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
  imagePreview: string | null;
}

export function ImageUpload({ onImageChange, imagePreview }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    onImageChange(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onImageChange(file);
  };

  return (
    <div
      className={`rounded-lg border-2 border-dashed p-4 text-center ${
        isDragging ? 'border-primary' : 'border-gray-300'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {imagePreview ? (
        <div className="relative h-48 w-full">
          <Image src={imagePreview || '/placeholder.svg'} alt="Preview" className="rounded-lg" />
        </div>
      ) : (
        <p className="text-gray-500">拖放图片到这里或点击上传</p>
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="image-upload" />
      <label htmlFor="image-upload">
        <Button variant="outline" className="mt-4" type="button">
          选择图片
        </Button>
      </label>
    </div>
  );
}
