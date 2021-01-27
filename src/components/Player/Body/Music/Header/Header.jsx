import React from 'react';
import styles from './Header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useData } from '../../../../../global/DataLayer';

const Header = () => {
  const [{ user }] = useData();
  return (
    <div className={styles.header}>
      <form>
        <SearchIcon className={styles.searchIcon} />
        <input type='text' placeholder='Search...' />
      </form>
      <div className={styles.header__avatar}>
        <Avatar
          className={styles.avatar}
          src={user?.images[0]?.url}
          alt={user?.display_name}
        />
        <p>{user?.display_name}</p>
      </div>
    </div>
  );
};

export default Header;
