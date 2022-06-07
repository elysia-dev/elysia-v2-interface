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
        <meta name="robots" content="index,follow"></meta>
        <link rel="canonical" href="https://www.elysia.land"></link>
        <meta
          name="description"
          content="The ELYSIA Protocol is a DAO project that connects the real world asset financial system and the virtual asset financial system"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="naver-site-verification"
          content="%REACT_APP_NAVER_SREACH_KEY%"
        />
        <meta
          name="google-site-verification"
          content="%REACT_APP_GOOGLE_SREACH_KEY%"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="The ELYSIA Protocol is a DAO project that connects the real world asset financial system and the virtual asset financial system"
        />
        <meta
          name="keyword"
          content="ELYSIA, ELYFI, Cryptocurrency, Block Chain, DeFi, BTC, ETH, real estate"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ELYSIA - Real World Asset Tokenization DAO"
        />
        <meta
          property="og:description"
          content="The ELYSIA Protocol is a DAO project that connects the real world asset financial system and the virtual asset financial system"
        />
        <meta
          property="og:site_name"
          content="ELYSIA - Real World Asset Tokenization DAO"
        />
        <meta property="og:url" content="https://elysia.land/" />
        <meta
          property="og:image"
          content="https://elysia.land/Elysia_img.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="The ELYSIA Protocol is a DAO project that connects the real world asset financial system and the virtual asset financial system"
        />
        <meta
          name="twitter:title"
          content="ELYSIA - Real World Asset Tokenization DAO"
        />
        <meta
          name="twitter:image"
          content="https://elysia.land/Elysia_img.png"
        />
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
