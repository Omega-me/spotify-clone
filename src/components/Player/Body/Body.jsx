import React from 'react';
import styles from './Body.module.css';
import Music from './Music/Music';
import Sidebar from './Sidebar/Sidebar';

const Body = () => {
  return (
    <div className={styles.body}>
      <Sidebar />
      <Music />
    </div>
  );
};

export default Body;
