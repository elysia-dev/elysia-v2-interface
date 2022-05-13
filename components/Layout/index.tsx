import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import { useCallback, useEffect, useRef } from 'react';
import Gradient from 'utils/gradient';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { pathname } = useRouter();

  const drawCanvas = useCallback(() => {
    const dpr = window.devicePixelRatio;
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    if (!canvas) return;
    let sub = 0;
    if (window.innerHeight > document.body.clientHeight) {
      sub = window.innerHeight - document.body.clientHeight;
    }
    canvas.width = document.body.clientWidth * dpr;
    canvas.height = (document.body.clientHeight + sub) * dpr;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;
    new Gradient(ctx, canvas.width, canvas.height, pathname);
  }, [pathname]);

  useEffect(() => {
    if (pathname.includes('Ecosystem')) return;
    drawCanvas();
  }, [drawCanvas, pathname]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log('Asdada');
      drawCanvas();
    });

    return () => {
      window.removeEventListener('resize', () => {
        drawCanvas();
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Elysia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: -1,
        }}></canvas>
      <Navigation />
      <div
        style={{
          width: '100%',
          margin: 'auto',
        }}>
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
