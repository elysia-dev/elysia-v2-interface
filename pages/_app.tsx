import 'i18n';

import '../styles/globals.css';
import '../styles/style.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import type { AppProps } from 'next/app';
import LanguageProvider from 'provider/LanguageProvider';
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import TxProvider from 'provider/TxProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import dynamic from 'next/dynamic';
import { metaMask, hooks as metaMaskHooks } from 'connector/metaMask';
import {
  walletConnect,
  hooks as walletConnectHooks,
} from 'connector/walletConnect';
import Head from 'next/head';

const Layout = dynamic(() => import('components/Layout'));

const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
];

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
    <Web3ReactProvider connectors={connectors}>
      <TxProvider>
        <LanguageProvider>
          <Layout>
            <Head>
              <meta charSet="utf-8" />
              <meta name="robots" content="index,follow"></meta>
              <link rel="canonical" href="https://www.elysia.land"></link>
              <link rel="icon" href="https://www.elysia.land/favicon.ico" />
              <link
                rel="alternate"
                hrefLang="en"
                href="https://www.elysia.land/en"
              />
              <link
                rel="alternate"
                href="https://www.elysia.land/ko"
                hrefLang="ko-KR"
              />
              <link
                rel="alternate"
                href="https://www.elysia.land/ko"
                hrefLang="x-default"
              />
              <meta
                name="title"
                content="ELYSIA | 엘리시아 : Real World Asset Tokenization DAO"
              />
              <link
                rel="shortcut icon"
                type="image/x-icon"
                href="https://www.elysia.land/favicon.ico"></link>
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
                content="ELYSIA, 엘리시아, ELYFI, Cryptocurrency, Block Chain, DeFi, BTC, ETH, real estate"
              />
              <noscript>You should use javascript</noscript>
              <meta property="og:type" content="website" />
              <meta
                property="og:title"
                content="ELYSIA | 엘리시아 : Real World Asset Tokenization DAO"
              />
              <meta
                property="og:keyword"
                content="ELYSIA, 엘리시아, ELYFI, Cryptocurrency, Block Chain, DeFi, BTC, ETH, real estate"
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
                property="twitter:keyword"
                content="ELYSIA, 엘리시아, ELYFI, Cryptocurrency, Block Chain, DeFi, BTC, ETH, real estate"
              />
              <meta
                name="twitter:title"
                content="ELYSIA | 엘리시아 : Real World Asset Tokenization DAO"
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
