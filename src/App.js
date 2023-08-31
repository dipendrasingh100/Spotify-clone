import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from './DataLayer';
import axios from 'axios';

const s = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromResponse();

    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      s.setAccessToken(_token);

      s.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      s.getPlaylist("6DoOcWlPAfS6Kwy1I6RuK0").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }
  }, [token, dispatch])

  console.log("User-> ", user)
  return (
    <div className="App">
      {
        token ? <Player spotify={s} /> : <Login />
      }

    </div>
  );
}

export default App;
