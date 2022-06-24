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

  const drawCanvas = () => {
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
  };

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
      <GradientCanvas ref={canvasRef} />
      <LayoutNoise />
      <Navigation />
      <LayoutDiv>{props.children}</LayoutDiv>
      <Footer />
    </>
  );
};

export default Layout;
