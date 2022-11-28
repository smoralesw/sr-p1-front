import Axios from 'axios';
import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Buffer } from 'buffer';
import './App.css';

function GetApiToken() {

    const { refresh } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const CLIENT_ID = '7b225af86b5542da99761ccd7925af04';
    const CLIENT_SECRET = '5d527c743e0f411daddced2cd3d15504';
    const REDIRECT_URL = 'http://localhost:3001/search';

    // use effect to post authCode to spotify/api/token
    useEffect(() => {
        async function postAuthCode() {
            try {
                const authCode = searchParams.get('code');
                const url = 'https://accounts.spotify.com/api/token';
                const config = {
                    headers: {
                        'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                };
                const data = {
                    grant_type: 'authorization_code',
                    code: authCode,
                    redirect_uri: REDIRECT_URL,
                };
                console.log('data: ', data);
                // const resp = await Axios.post(url, new URLSearchParams(data), config);
                const resp = await Axios.post(url, data, config);
                console.log(resp.data);
                    
            } catch (error) {
                console.log(error);
            }
        }
        postAuthCode();
    }, []);


    return (
        <div className="App">
            <header className="header">

                <h1>Spotify Path Finder</h1>

            </header>
        </div>
    );
}

export default GetApiToken;
