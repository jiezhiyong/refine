import type { FitEnum } from 'sharp';

export interface ImageResizeProps extends React.ComponentProps<'img'> {
  src: string; // a path within the assets/images directory, can be a nested path
  width?: number; // either width or height is required
  height?: number;
  fit?: keyof FitEnum; // contain is default
  alt?: string;
}

/**
 * eg: <ImageResize src="dog.jpg" width={600} height={600} />
 */
export const ImageResize = ({ width, height, fit, src, alt = '', ...other }: ImageResizeProps) => {
  const query = new URLSearchParams();
  if (width) {
    query.set('w', width.toString());
  }
  if (height) {
    query.set('h', height.toString());
  }
  if (fit) {
    query.set('fit', fit);
  }

  return <img alt={alt} src={`/api/image-resize/${src}?${query.toString()}`} {...{ width, height, ...other }} />;
};
