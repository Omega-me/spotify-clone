import React from 'react';
import styles from './Layout.module.css';
import Head from 'next/head';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Spotify Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
