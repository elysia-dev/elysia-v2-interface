import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

const Main = dynamic(() => import('components/Main'), {
  loading: () => (
    <div
      style={{
        height: '100vh',
      }}></div>
  ),
});

const MainPage = () => {
  return <Main />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lng: 'en' } }, { params: { lng: 'ko' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {},
  };
};

export default MainPage;
