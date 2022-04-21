import Governance from 'components/Governance';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import getLocalLanguage from 'utils/getLocalLanguage';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${getLocalLanguage()}`);
  }, [router]);

  return <></>;
};

export default Home;
