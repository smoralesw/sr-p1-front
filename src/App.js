import './App.css';
import Axios from 'axios';
import React, { useState } from 'react';
import PathsInfo from './PathsInfo';

function App() {
  const [nameIn, setNameIn] = useState('');
  const [artistIn, setArtistIn] = useState('');
  const [nameOut, setNameOut] = useState('');
  const [artistOut, setArtistOut] = useState('');
  const [response, setResponse] = useState();


  const handleSend = async () => {
    try {
      const resp = await Axios.post('http://localhost:8000/getPath', {
        nameIn: nameIn,
        artistIn: artistIn,
        nameOut: nameOut,
        artistOut: artistOut
      })
      setResponse(resp.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Ingresa una canción de entrada</p>
        <input className="search-bar" type="text" placeholder="Nombre" onChange={(event) => setNameIn(event.target.value)}/>
        <input className="search-bar" type="text" placeholder="Artista" onChange={(event) => setArtistIn(event.target.value)}/>

        <p>Ingresa una canción de salida</p>
        <input className="search-bar" type="text" placeholder="Nombre" onChange={(event) => setNameOut(event.target.value)}/>
        <input className="search-bar" type="text" placeholder="Artista" onChange={(event) => setArtistOut(event.target.value)}/>

        {/* Send Info */}
        <button className="search-button" onClick={() => handleSend() }>Buscar</button>        
      </header>

      <div>
        {/* if response is not null */}
        {response && <PathsInfo paths_len={Object.keys(response)} paths={Object.values(response)}/>}
      </div>

    </div>
  );
}

export default App;
