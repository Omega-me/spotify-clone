import styles from '../styles/PageStyles/HomePage/Home.module.css';
import Layout from '../components/Layout/Layout';
import Login from '../components/LoginPage/Login'
import { getTokenFromUrl } from '../libs/spotify'
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from '../components/Player/Player';
import { useData } from '../global/DataLayer'

const spotifyApi = new SpotifyWebApi();

export default function Home() {
  const [{ token }, dispatch] = useData()


  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = '';

    dispatch({
      type: 'SPOTIFY',
      spotify: spotifyApi
    })

    if (_token) {
      spotifyApi.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotifyApi.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        });
      })
      spotifyApi.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists
        })
      })

      spotifyApi.getPlaylist("37i9dQZEVXcDGzOUoKALFV").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

    }
  }, [token, dispatch])

  return (
    <Layout>
      {
        !token ? (<Login />) : (
          <div >
            <Player />
          </div>
        )
      }
    </Layout>
  );
}
