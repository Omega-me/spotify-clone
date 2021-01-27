import React from 'react';
import styles from './Sidebar.module.css';
import Image from 'next/image';
import SidebarElement from './SidebarElement/SidebarElement';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import { useData } from '../../../../global/DataLayer';

const Sidebar = () => {
  const [{ playlists }] = useData();
  return (
    <div className={styles.sidebar}>
      <Image
        src='/images/spotify-logo-horizontal-white.png'
        alt='logo'
        width='130px'
        height='50px'
      />

      <SidebarElement
        text='Home'
        Icon={<HomeOutlinedIcon className={styles.icon} />}
      />
      <SidebarElement
        text='Search'
        Icon={<SearchOutlinedIcon className={styles.icon} />}
      />
      <SidebarElement
        text='Your Library'
        Icon={<LibraryBooksOutlinedIcon className={styles.icon} />}
      />

      <h5 className={styles.sidebar__title}>PLAYLIST</h5>
      <hr />

      {playlists?.items.map((playlist, i) => (
        <SidebarElement key={i} playlist text={playlist?.name} />
      ))}
    </div>
  );
};

export default Sidebar;
