import React from 'react';
import './App.css';

function Home() {
  const CLIENT_ID = '7b225af86b5542da99761ccd7925af04';
  const REDIRECT_URL = 'http://localhost:3001/getApiToken';
  // const REDIRECT_URL = 'https://elaborate-cat-061860.netlify.app/getApiToken';

  const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const handleAuth = async () => {
    try {
      const url = 'https://accounts.spotify.com/authorize?';
      const config = {
        params: {
          client_id: CLIENT_ID,
          response_type: 'code',
          redirect_uri: REDIRECT_URL,
          scope: 'user-read-private user-read-email user-library-modify',
          state: generateRandomString(16),
          show_dialog: false,
        }
      };
      // redirect to spotify auth
      console.log("Listo para enviar a Spotify");
      window.location.replace(url + new URLSearchParams(config.params));

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className='search-h1'>Spotify Path Finder</h1>

        <button className="search-button" onClick={() => handleAuth() }>Login</button>        

      </header>
    </div>
  );
}

export default Home;
