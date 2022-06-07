import Main from 'components/Main';
import { configGtag } from 'lib/gtag';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === undefined) return;
    configGtag();
  }, []);

  return <Main />;
};

export default Home;
