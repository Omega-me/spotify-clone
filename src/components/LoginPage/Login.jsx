import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import Image from 'next/image';
import { accessUrl } from '../../libs/spotify';

const Login = () => {
  return (
    <div className={styles.login}>
      <Image
        src='/images/Spotify-logotipo.jpg'
        width='300px'
        height=''
        alt='logo'
      />
      <a href={accessUrl}>Login with spotify</a>
    </div>
  );
};

export default Login;
