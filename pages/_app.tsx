import 'i18n';

import '../styles/globals.css';
import '../styles/style.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from 'utils/getLibrary';
import TxProvider from 'provider/TxProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import getLocalLanguage from 'utils/getLocalLanguage';
import LanguageType from 'enums/LanguageType';

const Layout = dynamic(() => import('components/Layout'));

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const lng = router.asPath.substring(1, 3);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    i18n.changeLanguage(getLocalLanguage());
  }, []);

  useEffect(() => {
    if ([LanguageType.EN, LanguageType.KO].includes(lng as LanguageType)) {
      window.localStorage.setItem('@language', lng);
      i18n.changeLanguage(lng);
    }
    if (router.pathname === '/') {
      router.push(`/${getLocalLanguage()}`);
    }
  }, [lng]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <TxProvider>
        <Layout>
          <Head>
            <meta charSet="utf-8" />
            <meta name="robots" content="index,follow"></meta>
            <link rel="canonical" href="https://www.elysia.land"></link>
            <link rel="icon" href="/favicon.ico" />
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
            <meta
              name="keyword"
              content="ELYSIA, ELYFI, Cryptocurrency, Block Chain, DeFi, BTC, ETH, real estate"
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
      </TxProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
