import 'i18n';

import '../styles/globals.css';
import '../styles/style.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import type { AppProps } from 'next/app';
import LanguageProvider from 'provider/LanguageProvider';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from 'utils/getLibrary';
import TxProvider from 'provider/TxProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Layout = dynamic(() => import('components/Layout'));

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <TxProvider>
        <LanguageProvider>
          <Layout>
            <Head>
              <meta charSet="utf-8" />
              <link rel="icon" href="https://www.elysia.land/favicon.ico" />
              <title>ELYSIA - Real World Asset Tokenization DAO</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta name="theme-color" content="#3679b5" />
              <meta
                name="description"
                content="The ELYSIA Protocol is a DAO project that connects the real world asset financial system and the virtual asset financial system"
              />
              <noscript>You should use javascript</noscript>
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
                content="https://elysia.land/Thumbnail.png"
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
                content="https://elysia.land/Thumbnail.png"
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </LanguageProvider>
      </TxProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
