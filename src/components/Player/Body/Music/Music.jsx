import React from 'react';
import styles from './Music.module.css';
import Header from './Header/Header';
import Card from './Card/Card';
import AllMusics from './AllMusics/AllMusics';

const Music = () => {
  return (
    <div className={styles.music}>
      <Header />
      <Card />
      <AllMusics />
    </div>
  );
};

export default Music;
