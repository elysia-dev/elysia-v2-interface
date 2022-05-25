import dynamic from 'next/dynamic';

const Policy = dynamic(() => import('components/Policy'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const PrivacyPolicy = () => {
  return <Policy />;
};

export default PrivacyPolicy;
