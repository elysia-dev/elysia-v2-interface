import dynamic from 'next/dynamic';

const Disclaimer = dynamic(() => import('components/Disclaimer'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const DisClaimerPage = () => {
  return <Disclaimer />;
};
export default DisClaimerPage;
