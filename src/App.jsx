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
        window.localStorage.setItem('codeVerifier', codeVerifier);
        const hashed = await sha256(codeVerifier)
        const codeChallenge = base64encode(hashed);
        window.localStorage.setItem('codeChallenge', codeChallenge);
    }

    async function RequestUserAuthorization(){
        await ObtainCodeChallenge()
        const scope = 'user-read-private user-read-email';
        const authUrl = new URL("https://accounts.spotify.com/authorize")

        const params =  {
            response_type: 'code',
            client_id: clientId,
            scope,
            code_challenge_method: 'S256',
            code_challenge: window.localStorage.getItem('code_challenge'),
            redirect_uri: redirectUri,
        }

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
    }

    async function HandleRedirect() {
        const urlParams = new URLSearchParams(window.location.search);
        let code = urlParams.get('code');

        if (code) {
            window.localStorage.setItem('code', code);
        }
    }

    if (new URLSearchParams(window.location.search).has('code')) {
        HandleRedirect();
    }

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
            <button onClick={RequestUserAuthorization}>Log In With Spotify</button>
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
