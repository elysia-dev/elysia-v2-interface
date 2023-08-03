import dynamic from 'next/dynamic';
import { t } from 'i18next';
import { NextSeo } from 'next-seo';

const Labs = dynamic(() => import('components/Labs'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const DevelopersPage = () => {
  return (
    <>
      <NextSeo title={t('meta.development')} />
      <Labs />
    </>
  );
};

export default DevelopersPage;
