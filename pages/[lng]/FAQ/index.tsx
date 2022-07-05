import { t } from 'i18next';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import('components/FAQ'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const FAQPage = () => {
  return (
    <>
      <NextSeo title={t('meta.faq')} />
      <FAQ />
    </>
  );
};

export default FAQPage;
