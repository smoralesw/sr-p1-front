import './App.css';
import { useState } from 'react';

function App() {
  const [nameIn, setNameIn] = useState('');
  const [artistIn, setArtistIn] = useState('');
  const [nameOut, setNameOut] = useState('');
  const [artistOut, setArtistOut] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <p>Ingresa una canción de entrada</p>
        <input className="search-bar" type="text" placeholder="Nombre" onChange={(event) => setNameIn(event.target.value)}/>
        <input className="search-bar" type="text" placeholder="Artista" onChange={(event) => setArtistIn(event.target.value)}/>

        <p>Ingresa una canción de salida</p>
        <input className="search-bar" type="text" placeholder="Nombre" onChange={(event) => setNameOut(event.target.value)}/>
        <input className="search-bar" type="text" placeholder="Artista" onChange={(event) => setArtistOut(event.target.value)}/>

        <p>{nameIn}</p>
        <p>{artistIn}</p>
        <p>{nameOut}</p>
        <p>{artistOut}</p>
      </header>

    </div>
  );
}

export default App;
