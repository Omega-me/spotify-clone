import React from 'react';
import styles from './Header.module.css';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MusicElement from '../MusicElement/MusicElement';
import { useData } from '../../../../../../global/DataLayer';

const Header = () => {
  const [{ discover_weekly, spotify }, dispatch] = useData();
  const playPlaylist = id => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then(res => {
        spotify.getMyCurrentPlayingTrack().then(r => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });
  };

  const playSong = id => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then(res => {
        spotify.getMyCurrentPlayingTrack().then(r => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.white}>
          <div className={styles.layer}></div>
          <PlayCircleFilledWhiteIcon
            onClick={playPlaylist}
            className={`${styles.playButton} ${styles.button}`}
          />
        </div>
        <div className={styles.white}></div>
        <FavoriteIcon className={`${styles.favourite} ${styles.button}`} />
        <MoreHorizIcon className={`${styles.more} ${styles.button}`} />
      </div>
      <hr className={styles.hrLine} />
      {discover_weekly?.tracks?.items?.map((music, i) => (
        <MusicElement
          key={i}
          date={music.added_at}
          duration={music.duration_ms}
          albumName={music.track?.album?.name}
          title={music.track?.name}
          id={music.track}
          cover={music.track?.album?.images[2]?.url}
          artist={music.track.artists[0].name}
          index={i}
          playSong={playSong}
        />
      ))}
    </>
  );
};

export default Header;
