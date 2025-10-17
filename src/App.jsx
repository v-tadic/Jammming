import { useState, useEffect } from 'react'
import styles from './app.module.css'
import Search from '../src/components/search'
import Track from './components/track'
import SearchResults from './components/searchResults'
import Playlist from './components/playlist'

function App() {

    const [playlistName, setPlaylistName] = useState('')
    const [trackIsInPlaylist, setTrackIsInPlaylist] = useState()

    const [tracks, setTracks] = useState([
        { id: '1', name: 'Bass', artist: 'Jala Brat', uri:'spotify:track:54AUuzGDu5BEbUGY5FWd9k'},
        { id: '2', name: 'Time', artist: 'Pink Floyd', uri:'spotify:track:3TO7bbrUKrOSPGRTB5MeCz'},
        { id: '3', name: 'Freebird', artist: 'Lynyrd Skynyrd', uri:'spotify:track:5EWPGh7jbTNO2wakv8LjUI'},
        { id: '5', name: 'Sprinter', artist: 'Central Cee', uri:'spotify:track:2FDTHlrBguDzQkp7PVj16Q'}
    ]);

    const [playlistTracks, setPlaylistTracks] = useState([

    ]);


    function addTrackToPlaylist(track) {
        const existsInArray = playlistTracks.some(oldTrack => oldTrack.name === track.name)
        if(!existsInArray) {
            setPlaylistTracks((prev) => [...prev, track]);
        }
    }

    function removeTrack(track) {
        const existsInPlaylist = playlistTracks.some(allTrack => allTrack.name === track.name)
        if(existsInPlaylist) {
            setPlaylistTracks(playlistTracks.filter(allTrack => allTrack.name !== track.name))
        }
    }

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
