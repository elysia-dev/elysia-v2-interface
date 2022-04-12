import Navigation from 'components/Navigation';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import getLocalLanguage from 'utils/getLocalLanguage';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${getLocalLanguage()}/Governance`);
  }, []);

  return <></>;
};

export default Home;
