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
          <Component {...pageProps} />
        </Layout>
      </TxProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
