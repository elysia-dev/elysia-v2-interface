import Navigation from 'components/Navigation';
import Head from 'next/head';
import { useCallback, useEffect, useRef } from 'react';
import Gradient from 'utils/gradient';
import { GradientCanvas, LayoutDiv, LayoutNoise } from './styles';
import dynamic from 'next/dynamic';
import useIsMobile from 'hooks/useIsMobile';

const Footer = dynamic(() => import('components/Footer'));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isMobile } = useIsMobile();

  const drawCanvas = useCallback(() => {
    const dpr = window.devicePixelRatio;
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    if (!canvas) return;
    let sub = 0;
    if (window.innerHeight > document.body.clientHeight) {
      sub = window.innerHeight - document.body.clientHeight;
    }
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;
    ctx.scale(2, 2);
    new Gradient(ctx, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    drawCanvas();
  }, [drawCanvas, isMobile]);

  useEffect(() => {
    // window.addEventListener('resize', () => {
    //   // drawCanvas();
    // });
    // return () => {
    //   window.removeEventListener('resize', () => {
    //     // drawCanvas();
    //   });
    // };
  }, []);

  return (
    <>
      <Head>
        <title>Elysia</title>
        <meta
          name="description"
          content="The ELYSIA Protocol is a DAO project that connects the real world asset financial system and the virtual asset financial system"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GradientCanvas ref={canvasRef} />
      <LayoutNoise />
      <Navigation />
      <LayoutDiv>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <div
            style={{
              width: '90%',
              maxWidth: '1639px',
            }}>
            {props.children}
          </div>
        </div>
      </LayoutDiv>
      <Footer />
    </>
  );
};

export default Layout;
