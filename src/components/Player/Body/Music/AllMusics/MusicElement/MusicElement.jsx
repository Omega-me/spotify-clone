import React from 'react';
import styles from './MusicElement.module.css';

const MusicElement = ({
  date,
  duration,
  title,
  cover,
  index,
  albumName,
  artist,
  playSong,
  id,
}) => {
  return (
    <div className={styles.musicElement} onClick={() => playSong(id.id)}>
      <p className={styles.musicElement__counter}>{index + 1}</p>
      <img src={cover} alt='cover' />
      <div className={styles.musicElement__music}>
        <p className={styles.musicElement__title}>{title}</p>
        <p className={styles.musicElement__artist}>{artist}</p>
      </div>
      <p className={styles.musicElement__albumName}>{albumName}</p>
      <p className={styles.musicElement__addedBy}>spotify</p>
      <p className={styles.musicElement__date}>{date}</p>
      <p className={styles.musicElement__musicHeight}>{duration}</p>
    </div>
  );
};

export default MusicElement;
