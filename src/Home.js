import React from 'react';
import './App.css';

function Home() {
  const CLIENT_ID = '7b225af86b5542da99761ccd7925af04';
  const CLIENT_SECRET = '5d527c743e0f411daddced2cd3d15504';
  const REDIRECT_URL = 'http://localhost:3001/getApiToken/false';

  const handleAuth = async () => {
    try {
      const url = 'https://accounts.spotify.com/authorize?';
      const config = {
        params: {
          client_id: CLIENT_ID,
          response_type: 'code',
          redirect_uri: REDIRECT_URL,
          scope: 'user-read-private user-read-email user-library-modify',
          // state: '34fFs29kd09',
          show_dialog: false,
        }
      };
      // redirect to spotify auth
      window.location.replace(url + new URLSearchParams(config.params));

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Spotify Path Finder</h1>

        <button className="search-button" onClick={() => handleAuth() }>Spotify Auth</button>        

      </header>
    </div>
  );
}

export default Home;
