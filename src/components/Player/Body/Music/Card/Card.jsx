import React from 'react';
import styles from './Card.module.css';
import { useData } from '../../../../../global/DataLayer';

const Card = () => {
  const [{ discover_weekly }] = useData();
  return (
    <div className={styles.card}>
      <img
        src={discover_weekly?.images[0].url}
        width='230px'
        height='230px'
        alt='playlist_photo'
      />
      <div className={styles.card__info}>
        <h4 className={styles.card_playlistType}>
          {discover_weekly?.collaborative
            ? 'collaborative playlist'
            : 'non collaborative playlist'}
        </h4>
        <h1>{discover_weekly?.name}</h1>
        <h4>
          {discover_weekly?.owner?.display_name} {''} •{' '}
          <span>{discover_weekly?.followers?.total} likes</span> • {''}
          <span>{discover_weekly?.tracks?.items.length} songs</span>
        </h4>
      </div>
    </div>
  );
};

export default Card;
