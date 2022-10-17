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
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import { useTranslation } from 'react-i18next';
import Script from 'next/script';
import Favicon from 'public/favicon.png';

const Layout = dynamic(() => import('components/Layout'));

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { t } = useTranslation();

  const DEFAULT_SEO: DefaultSeoProps = {
    title: t('meta.defaultTitle'),
    titleTemplate: t('meta.titleTemplate'),
    defaultTitle: t('meta.defaultTitle'),
    description: t('meta.description'),
    canonical: 'https://www.elysia.land',
    openGraph: {
      url: 'https://www.elysia.land/',
      title: t('meta.defaultTitle'),
      description: t('meta.description'),
      site_name: 'ELYSIA - 엘리시아',
      type: 'website',
      images: [
        {
          url: 'https://www.elysia.land/Thumbnail.png',
          width: 800,
          height: 600,
          alt: 'Elysia Open Graph Thumbnail',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      cardType: 'summary',
    },
    languageAlternates: [
      {
        hrefLang: 'en',
        href: 'https://www.elysia.land/en',
      },
      {
        hrefLang: 'ko-KR',
        href: 'https://www.elysia.land/ko',
      },
      {
        hrefLang: 'x-default',
        href: 'https://www.elysia.land/ko',
      },
    ],
    additionalLinkTags: [
      {
        rel: 'icon',
        href: 'https://www.elysia.land/favicon.png',
      },
    ],
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'facebook-domain-verification',
        content: 'rolwiofcma4wy5zuhf6ew8ki93kfek',
      },
    ],
  };

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
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1809333066008668');
          fbq('track', 'PageView');
          `,
        }}
      />
      <Web3ReactProvider getLibrary={getLibrary}>
        <TxProvider>
          <LanguageProvider>
            <Layout>
              <DefaultSeo {...DEFAULT_SEO} />
              <Component {...pageProps} />
            </Layout>
          </LanguageProvider>
        </TxProvider>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
