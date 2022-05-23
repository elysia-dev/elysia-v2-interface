import dynamic from 'next/dynamic';

const Documents = dynamic(() => import('components/Documents'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const DocumentsPage = () => {
  return <Documents />;
};

export default DocumentsPage;
