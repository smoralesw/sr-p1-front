import Axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PathsInfo from './PathsInfo';
import './App.css';

function SearchPlace() {

  const [nameIn, setNameIn] = useState('');
  const [artistIn, setArtistIn] = useState('');
  const [nameOut, setNameOut] = useState('');
  const [artistOut, setArtistOut] = useState('');
  const [responseKeys, setResponseKeys] = useState();
  const [responseValues, setResponseValues] = useState();

  const { accessToken } = useParams();
  // const { refreshToken } = useParams();
  // const { expiresIn } = useParams();
  // const { tokenType } = useParams();

  const handleSend = async () => {
    try {
      const resp = await Axios.post('http://localhost:8000/getPath', {
        nameIn: nameIn,
        artistIn: artistIn,
        nameOut: nameOut,
        artistOut: artistOut
      })
      setResponseKeys(Object.keys(resp.data.result.most_stable_paths));
      setResponseValues(Object.values(resp.data.result.most_stable_paths));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className='search-h1'>Spotify Path Finder</h1>
        
        <p>Ingresa una canción de entrada</p>
        <input className="search-bar" id="search-bar" type="text" placeholder="Nombre" onChange={(event) => setNameIn(event.target.value)}/>
        <input className="search-bar" id="search-bar" type="text" placeholder="Artista" onChange={(event) => setArtistIn(event.target.value)}/>

        <p>Ingresa una canción de salida</p>
        <input className="search-bar" id="search-bar" type="text" placeholder="Nombre" onChange={(event) => setNameOut(event.target.value)}/>
        <input className="search-bar" id="search-bar" type="text" placeholder="Artista" onChange={(event) => setArtistOut(event.target.value)}/>

        {/* Send Info */}
        <button className="search-button" onClick={() => handleSend() }>Buscar</button>        
        
        <div>
          {/* if response is not null */}
          {responseKeys && <PathsInfo paths_len={ responseKeys } paths={ responseValues } accessToken={ accessToken }/>}
        </div>

      </header>


    </div>
  );
}

export default SearchPlace;