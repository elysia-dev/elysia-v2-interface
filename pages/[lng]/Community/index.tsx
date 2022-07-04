import { t } from 'i18next';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const Community = dynamic(() => import('components/Community'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const CommunityPage = () => {
  return (
    <>
      <NextSeo title={t('meta.community')} />
      <Community />
    </>
  );
};
export default CommunityPage;
