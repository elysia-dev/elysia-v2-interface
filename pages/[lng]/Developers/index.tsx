import dynamic from 'next/dynamic';
import { t } from 'i18next';
import { NextSeo } from 'next-seo';

const Developers = dynamic(() => import('components/Developers'), {
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
      <Developers />
    </>
  );
};

export default DevelopersPage;
