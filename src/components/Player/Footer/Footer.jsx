import React, { useEffect } from 'react';
import styles from './Footer.module.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DevicesIcon from '@material-ui/icons/Devices';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Slider from '@material-ui/core/Slider';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { useData } from '../../../global/DataLayer';

const Footer = () => {
  const [{ token, item, playing, spotify }, dispatch] = useData();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then(r => {
      console.log(r);

      dispatch({
        type: 'SET_PLAYING',
        playing: r.is_playing,
      });

      dispatch({
        type: 'SET_ITEM',
        item: r.item,
      });
    });
  }, [spotify]);
  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: 'SET_PLAYING',
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    }
  };
  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__musicInfo}>
        <img src={item?.album.images[0].url} alt={item?.name} />
        {item ? (
          <div className={styles.footer__music}>
            <p className={styles.footer__title}>{item.name}</p>
            <p>{item.artists.map(artist => artist.name).join(', ')}</p>
          </div>
        ) : (
          <div className={styles.footer__music}>
            <p className={styles.footer__title}>No song is playing</p>
            <p>...</p>
          </div>
        )}
        <FavoriteBorderIcon className={styles.FavoriteBorderIcon} />
        <DevicesIcon />
      </div>
      <div className={styles.footer__player}>
        <ShuffleIcon className={styles.shuffle} />
        <SkipPreviousIcon onClick={skipPrevious} className={styles.prev} />
        {playing ? (
          <PauseCircleFilledIcon
            onClick={handlePlayPause}
            className={styles.playButton}
          />
        ) : (
          <PlayCircleFilledIcon
            onClick={handlePlayPause}
            className={styles.playButton}
          />
        )}
        <SkipNextIcon onClick={skipNext} className={styles.next} />
        <RepeatIcon className={styles.repeat} />
      </div>
      <div className={styles.footer__volume}>
        <PlaylistPlayIcon />
        <DevicesOtherIcon />
        <VolumeUpIcon />
        <Slider className={styles.slider} />
      </div>
    </footer>
  );
};
export default Footer;
