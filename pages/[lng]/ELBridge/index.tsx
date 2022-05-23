import dynamic from 'next/dynamic';

const ELBridge = dynamic(() => import('components/ELBridge'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const Onboarding = () => {
  return <ELBridge />;
};

export default Onboarding;
