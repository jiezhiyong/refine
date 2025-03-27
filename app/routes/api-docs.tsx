import { useEffect, useRef } from 'react';

/**
 * API 文档页面
 *
 * 此页面展示由 Redocly 生成的 OpenAPI 文档
 */
export default function ApiDocs() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // 调整 iframe 高度以适应内容
    const adjustIframeHeight = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = '100vh';
      }
    };

    window.addEventListener('resize', adjustIframeHeight);
    adjustIframeHeight();

    return () => {
      window.removeEventListener('resize', adjustIframeHeight);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        ref={iframeRef}
        src="/redoc-static.html"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
        title="API 文档"
      />
    </div>
  );
}
