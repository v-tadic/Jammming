import { useState, useEffect } from 'react';
import styles from './app.module.css';
import Search from './components/search';
import Track from './components/track';
import SearchResults from './components/searchResults';
import Playlist from './components/playlist';
import playlist from "./components/playlist";

function App() {
    const [playlistName, setPlaylistName] = useState('');
    const [trackIsInPlaylist, setTrackIsInPlaylist] = useState();
    const [clientId, setClientId] = useState('e01a6d79177d4951a630fc9014f5c482');
    const [redirectUri, setRedirectUri] = useState('http://127.0.0.1:5173');
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [tracks, setTracks] = useState([

    ]);

    const [playlistTracks, setPlaylistTracks] = useState([]);

    //Funkcije za generisanje code verifier i code challenge
    const generateRandomString = (length) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = crypto.getRandomValues(new Uint8Array(length));
        return values.reduce((acc, x) => acc + possible[x % possible.length], "");
    }
    const sha256 = async (plain) => {
        const encoder = new TextEncoder()
        const data = encoder.encode(plain)
        return window.crypto.subtle.digest('SHA-256', data)
    }
    const base64encode = (input) => {
        return btoa(String.fromCharCode(...new Uint8Array(input)))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    }

    async function ObtainCodeChallenge() {
        const codeVerifier  = generateRandomString(64);
        window.localStorage.setItem('code_verifier', codeVerifier);
        const hashed = await sha256(codeVerifier)
        const codeChallenge = base64encode(hashed);
        window.localStorage.setItem('codeChallenge', codeChallenge);
    }

    async function SendTheUserToSpotify(){
        await ObtainCodeChallenge();

        const scope = 'user-read-private user-read-email';
        const authUrl = new URL("https://accounts.spotify.com/authorize")


        const params =  {
            response_type: 'code',
            client_id: clientId,
            scope,
            code_challenge_method: 'S256',
            code_challenge: window.localStorage.getItem('codeChallenge'),
            redirect_uri: redirectUri,
        }

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
    }

    const getToken = async code => {

        // stored in the previous step
        const codeVerifier = localStorage.getItem('code_verifier');

        const url = "https://accounts.spotify.com/api/token";
        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: clientId,
                grant_type: 'authorization_code',
                code,
                redirect_uri: redirectUri,
                code_verifier: codeVerifier,
            }),
        }

        const body = await fetch(url, payload);
        const response = await body.json();

        localStorage.setItem('access_token', response.access_token);
        setUserLoggedIn(true);
    }

    function GetCode() {
        const urlParams = new URLSearchParams(window.location.search);
        let code = urlParams.get('code');

        if (code && !localStorage.getItem('code')) {
            localStorage.setItem('code', code);
            getToken(code)
        }
    }


    useEffect(() => {
        GetCode()
    }, [])



    function addTrackToPlaylist(track) {
        const existsInArray = playlistTracks.some((oldTrack) => oldTrack.name === track.name);
        if (!existsInArray) {
            setPlaylistTracks((prev) => [...prev, track]);
        }
    }

    function removeTrack(track) {
        const existsInPlaylist = playlistTracks.some((allTrack) => allTrack.name === track.name);
        if (existsInPlaylist) {
            setPlaylistTracks(playlistTracks.filter((allTrack) => allTrack.name !== track.name));
        }
    }

    function addPlaylistToUserAccount() {
        let uriArray = playlistTracks.map((track) => track.uri);
        console.log(uriArray);
        setPlaylistTracks([]);
        setPlaylistName('');
    }

    return (
        <div>
            <h1 className={styles.Title}>Jammming</h1>
            <button onClick={SendTheUserToSpotify}>Log In With Spotify</button>
            <Search></Search>
            <SearchResults tracks={tracks} addTrackToPlaylist={addTrackToPlaylist}></SearchResults>
            <h1 className={styles.YourPlaylist}>Your Playlist:</h1>
            <Playlist
                addPlaylistToUserAccount={addPlaylistToUserAccount}
                playlistName={playlistName}
                setPlaylistName={setPlaylistName}
                playlistTracks={playlistTracks}
                removeTrack={removeTrack}
                trackIsInPlaylist={trackIsInPlaylist}
            />
        </div>
    );
}

export default App;
