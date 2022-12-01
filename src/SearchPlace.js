import Axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PathsInfo from './PathsInfo';
import { ThreeDots } from 'react-loader-spinner';
import './App.css';



function SearchPlace() {

  const [nameIn, setNameIn] = useState('');
  const [artistIn, setArtistIn] = useState('');
  const [nameOut, setNameOut] = useState('');
  const [artistOut, setArtistOut] = useState('');
  const [responseKeys, setResponseKeys] = useState();
  const [responseValues, setResponseValues] = useState();
  const [genre, setGenre] = useState('chilean');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const URL_BACK = 'http://localhost:8000/getPath';

  const { accessToken } = useParams();
  // const { refreshToken } = useParams();
  // const { expiresIn } = useParams();
  // const { tokenType } = useParams();

  const handleSend = async () => {
    try {
      setError("");
      setLoading(true);
      const resp = await Axios.post(URL_BACK, {
        nameIn: nameIn,
        artistIn: artistIn,
        nameOut: nameOut,
        artistOut: artistOut,
        genre: genre,
      })
      setLoading(false);
      setResponseKeys(Object.keys(resp.data.result.most_stable_paths));
      setResponseValues(Object.values(resp.data.result.most_stable_paths));
    } catch (error) {
      setLoading(false);
      setError(error.response.data.detail);
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className='search-h1'>Spotify Path Finder</h1>
        
        {/* Loading indicator */}
        {loading && <div className='loading'>
          <h1>Loading...</h1>
          <ThreeDots color="grey" height="250" width="250" />
        </div>}

        {/* Error message */}
        {error !== "" && <div className='error'>
          <h1 className='error-msg'>{error}</h1>
        </div>}

        <p className='text'>Qué género te interesa descubrir?</p>
        <select className='select' onChange={(event) => setGenre(event.target.value)}>
          <option value='chilean'>Artistas Chilenos</option>
          {/* <option value='reggaeton' >Reggaeton</option> */}
          {/* <option value='ska'>Ska</option> */}
          <option value='hardrockslimmer'>Rock</option>
          <option value='trap'>Trap Latino</option>
        </select>
        
        <p className='text'>Ingresa una canción de entrada</p>
        <input id="search-bar" type="text" placeholder="Nombre" onChange={(event) => setNameIn(event.target.value)}/>
        <input id="search-bar" type="text" placeholder="Artista" onChange={(event) => setArtistIn(event.target.value)}/>

        <p className='text'>Ingresa una canción de salida</p>
        <input id="search-bar" type="text" placeholder="Nombre" onChange={(event) => setNameOut(event.target.value)}/>
        <input id="search-bar" type="text" placeholder="Artista" onChange={(event) => setArtistOut(event.target.value)}/>

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
