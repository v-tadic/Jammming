import { useState, useEffect } from 'react'
import styles from './app.module.css'
import Search from '../src/components/search'
import Track from './components/track'
import SearchResults from './components/searchResults'
import Playlist from './components/playlist'

function App() {

    //state za ime plejliste
    const [playlistName, setPlaylistName] = useState('')
    //state za proveru da li je track u plejlisti
    const [trackIsInPlaylist, setTrackIsInPlaylist] = useState()

    //privremeno - simuliranje pesama koje smo dobili na osnovu search
    const [tracks, setTracks] = useState([
        { id: '1', name: 'Bass', artist: 'Jala Brat', uri:'spotify:track:54AUuzGDu5BEbUGY5FWd9k'},
        { id: '2', name: 'Time', artist: 'Pink Floyd', uri:'spotify:track:3TO7bbrUKrOSPGRTB5MeCz'},
        { id: '3', name: 'Freebird', artist: 'Lynyrd Skynyrd', uri:'spotify:track:5EWPGh7jbTNO2wakv8LjUI'},
        { id: '5', name: 'Sprinter', artist: 'Central Cee', uri:'spotify:track:2FDTHlrBguDzQkp7PVj16Q'}
    ]);

    //state koji cuva podatke o pesmama u plejlisti u vidi array objekata
    const [playlistTracks, setPlaylistTracks] = useState([

    ]);

    //funcija koja uzima objekat sa podatcima o tracku i dodaje ga u playlistTracks
    function addTrackToPlaylist(track) {
        const existsInArray = playlistTracks.some(oldTrack => oldTrack.name === track.name)
        if(!existsInArray) {
            setPlaylistTracks((prev) => [...prev, track]);
        }
    }

    //funkcija koja uzima objekat sa podatcima o track i taj track "uklanja iz plejliste" !
    function removeTrack(track) {
        const existsInPlaylist = playlistTracks.some(allTrack => allTrack.name === track.name)
        if(existsInPlaylist) {
            setPlaylistTracks(playlistTracks.filter(allTrack => allTrack.name !== track.name))
        }
    }

    //funkcija koja stvara novi array stringova, ovaj array cuva uri svih pesama iz playlistTracks
    function addPlaylistToUserAccount(){
        let uriArray = playlistTracks.map(track => track.uri);
        console.log(uriArray);
        setPlaylistTracks([]);
        setPlaylistName('');
    }

  return (
    <div>
      <h1 className={styles.Title}>Jammming</h1>
      <Search></Search>
      <SearchResults tracks={tracks} addTrackToPlaylist={addTrackToPlaylist}></SearchResults>
      <h1 className={styles.YourPlaylist}>Your Playlist:</h1>
      <Playlist addPlaylistToUserAccount={addPlaylistToUserAccount} playlistName={playlistName} setPlaylistName={setPlaylistName} playlistTracks={playlistTracks} removeTrack={removeTrack} trackIsInPlaylist={trackIsInPlaylist}></Playlist>
    </div>
  )
}

export default App
