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
        { id: '1', name: 'Bass', artist: 'Jala Brat'},
        { id: '2', name: 'Time', artist: 'Pink Floyd'},
        { id: '3', name: 'Freebird', artist: 'Lynyrd Skynyrd'},
        { id: '4', name: 'GoodFellas', artist: 'Jala Brat'},
        { id: '5', name: 'Sprinter', artist: 'Central Cee'}
    ]);

    const [playlistTracks, setPlaylistTracks] = useState([

    ]);

    function addTrackToPlaylist(track) {
        const existsInArray = playlistTracks.some(oldTrack => oldTrack.name === track.name)
        if(!existsInArray) {
            setPlaylistTracks((prev) => [...prev, track]);
            setTrackIsInPlaylist(true)
        }
    }

    function removeTrack(track) {
        const existsInPlaylist = playlistTracks.some(oldTrack => oldTrack.name === track.name)
        if(existsInPlaylist) {
            setPlaylistTracks(playlistTracks.filter(oldTrack => oldTrack.name !== track.name))
            setTrackIsInPlaylist(false)
        }
    }


  return (
    <div>
      <h1 className={styles.Title}>Jammming</h1>
      <Search></Search>
      <SearchResults resultsData={tracks} addTrackToPlaylist={addTrackToPlaylist}></SearchResults>
      <h1 className={styles.YourPlaylist}>Your Playlist:</h1>
      <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} playlistTracks={playlistTracks} removeTrack={removeTrack} trackIsInPlaylist={trackIsInPlaylist}></Playlist>
    </div>
  )
}

export default App
