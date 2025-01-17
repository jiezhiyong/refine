import { Fullscreen } from 'lucide-react';
import { Button } from '~/components-shadcn/button';

export const FullscreenSwitcher = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
      }}
    >
      <Fullscreen />
    </Button>
  );
};
