import Layout from 'components/Layout';
import Main from 'components/Main';
import Navigation from 'components/Navigation';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from 'styles/Home.module.css';

const MainPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Main />
      </div>
    </>
  );
};

export default MainPage;
