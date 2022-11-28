import Axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Buffer } from 'buffer';
import './App.css';

function GetApiToken() {

    const [searchParams, setSearchParams] = useSearchParams();

    const CLIENT_ID = '7b225af86b5542da99761ccd7925af04';
    const CLIENT_SECRET = '5d527c743e0f411daddced2cd3d15504';
    const REDIRECT_URL = 'http://localhost:3001/getApiToken';

    const [accessToken, setAccessToken] = React.useState('');
    // const [refreshToken, setRefreshToken] = React.useState('');
    // const [expiresIn, setExpiresIn] = React.useState('');
    // const [tokenType, setTokenType] = React.useState('');

    const navigate = useNavigate();

    // use effect to post authCode to spotify/api/token
    useEffect(() => {
        async function postAuthCode() {
            try {
                const authCode = searchParams.get('code');
                const state = searchParams.get('state');
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
                const resp = await Axios.post(url, data, config);
                setAccessToken(resp.data.access_token);
            } catch (error) {
                console.log(error);
            }
        }
        postAuthCode();
    }, [searchParams]);


    return (
        <div className="App">
            <header className="header">
                {/* if accessToken has been received, navigate to SearchPlace */}
                {accessToken && navigate(`/search/${accessToken}`)}
            </header>
        </div>
    );
}

export default GetApiToken;
