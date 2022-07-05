import { t } from 'i18next';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';

const Governance = dynamic(() => import('components/Governance'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const ELStaking = () => {
  return (
    <>
      <NextSeo title={t('meta.governance')} />
      <Governance />
    </>
  );
};

export default ELStaking;
