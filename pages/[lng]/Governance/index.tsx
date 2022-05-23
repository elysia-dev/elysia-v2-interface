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
  return <Governance />;
};

export default ELStaking;
