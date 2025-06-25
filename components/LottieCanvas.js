import { useEffect, useRef } from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-web';

export default function LottieCanvas({ src, width = 180, height = 180 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && src) {
      const lottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: canvasRef.current,
        src,
      });
      return () => lottie.destroy && lottie.destroy();
    }
  }, [src]);

  return <canvas ref={canvasRef} width={width} height={height} style={{ width, height }} />;
} 