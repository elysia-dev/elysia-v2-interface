import dynamic from 'next/dynamic';

const V1Staking = dynamic(() => import('components/V1Staking'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const V1StakingInfo = () => {
  return <V1Staking />;
};

export default V1StakingInfo;
