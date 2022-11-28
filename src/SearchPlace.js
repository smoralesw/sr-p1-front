import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PathsInfo from './PathsInfo';
import './App.css';

function SearchPlace() {

  const [searchParams, setSearchParams] = useSearchParams();

  const CLIENT_ID = '7b225af86b5542da99761ccd7925af04';
  const CLIENT_SECRET = '5d527c743e0f411daddced2cd3d15504';
  const REACT_URL = 'http://localhost:3001/search';

  const [nameIn, setNameIn] = useState('');
  const [artistIn, setArtistIn] = useState('');
  const [nameOut, setNameOut] = useState('');
  const [artistOut, setArtistOut] = useState('');
  const [responseKeys, setResponseKeys] = useState();
  const [responseValues, setResponseValues] = useState();

  const handleSend = async () => {
    try {
      const resp = await Axios.post('http://localhost:8000/getPath', {
        nameIn: nameIn,
        artistIn: artistIn,
        nameOut: nameOut,
        artistOut: artistOut
      })
      console.log(resp.data);
      setResponseKeys(Object.keys(resp.data.result.most_stable_paths));
      setResponseValues(Object.values(resp.data.result.most_stable_paths));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="header">
        
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
          {responseKeys && <PathsInfo paths_len={ responseKeys } paths={ responseValues }/>}
        </div>

      </header>


    </div>
  );
}

export default SearchPlace;
