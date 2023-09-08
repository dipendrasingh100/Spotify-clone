// import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromResponse } from './spotify';
import Player from './components/Player';
// import { useDataLayerValue } from './DataLayer';

function App() {
  // const [, dispatch] = useDataLayerValue()

  const token = window.sessionStorage.getItem("token")
  console.log("token before login",token);
  if (!token) {
    const hash = getTokenFromResponse();

    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      // dispatch({
      //   type: 'SET_TOKEN',
      //   token: _token
      // })
      window.sessionStorage.setItem("token", _token)
      console.log("token after login",token);
    }
  }

  return (
    <div className="App">
      {
        token ? <Player /> : <Login />
      }

    </div>
  );
}

export default App;
