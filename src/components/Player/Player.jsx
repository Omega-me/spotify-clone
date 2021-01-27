import React from 'react';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import styles from './Player.module.css';

const Player = () => {
  return (
    <main className={styles.player}>
      <Body />
      <Footer />
    </main>
  );
};

export default Player;
