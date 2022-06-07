import dynamic from 'next/dynamic';

const Developers = dynamic(() => import('components/Developers'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const DevelopersPage = () => {
  return <Developers />;
};

export default DevelopersPage;
