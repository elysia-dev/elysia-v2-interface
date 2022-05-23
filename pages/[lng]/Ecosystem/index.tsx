import dynamic from 'next/dynamic';

const Ecosystem = dynamic(() => import('components/Ecosystem'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const EcosystemPage = () => {
  return <Ecosystem />;
};

export default EcosystemPage;
