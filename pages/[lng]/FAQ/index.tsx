import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import('components/FAQ'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const FAQPage = () => {
  return <FAQ />;
};

export default FAQPage;
