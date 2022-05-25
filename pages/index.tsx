import Main from 'components/Main';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return <Main />;
};

export default Home;
