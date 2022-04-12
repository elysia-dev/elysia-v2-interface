import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Elysia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div
        style={{
          width: 1190,
          paddingTop: 107,
          margin: 'auto',
        }}>
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
