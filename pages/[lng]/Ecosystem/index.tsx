import dynamic from 'next/dynamic';
import { t } from 'i18next';
import { NextSeo } from 'next-seo';

const Ecosystem = dynamic(() => import('components/Ecosystem'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const EcosystemPage = () => {
  return (
    <>
      <NextSeo title={t('meta.ecosystem')} />
      <Ecosystem />
    </>
  );
};

export default EcosystemPage;
