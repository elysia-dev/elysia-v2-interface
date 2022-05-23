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
  return <Community />;
};
export default CommunityPage;
