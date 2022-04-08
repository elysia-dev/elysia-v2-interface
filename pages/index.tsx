import Navigation from 'components/Navigation';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router);

  // useEffect(() => {
  //   router.push('/ko');
  // }, [router]);
  return <></>;
};

export default Home;
