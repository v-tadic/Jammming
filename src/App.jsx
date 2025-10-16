import { useState, useEffect } from 'react'
import styles from './app.module.css'
import Search from '../src/components/search'
import Track from './components/track'
import SearchResults from './components/searchResults'
import Playlist from './components/playlist'

function App() {

    const [playlistName, setPlaylistName] = useState('')

    const [tracks, setTracks] = useState([
        { id: '1', name: 'Bass', artist: 'Jala Brat'},
        { id: '2', name: 'Time', artist: 'Pink Floyd'},
        { id: '3', name: 'Freebird', artist: 'Lynyrd Skynyrd'},
        { id: '4', name: 'GoodFellas', artist: 'Jala Brat'},
        { id: '5', name: 'Sprinter', artist: 'Central Cee'}
    ]);

    const [playlistTracks, setPlaylistTracks] = useState([
        { id: '1', name: 'Japan', artist: 'Jala Brat'},
        { id: '2', name: 'Dogs', artist: 'Pink Floyd'},
        { id: '3', name: 'Ramblin Man', artist: 'The Allman Brothers Band'},
        { id: '4', name: 'Toronto', artist: 'Jala Brat'},
        { id: '5', name: 'Entrepreneur', artist: 'Central Cee'}
    ]);


  return (
    <div>
      <h1 className={styles.Title}>Jammming</h1>
      <Search></Search>
      <SearchResults resultsData={tracks}></SearchResults>
      <h1 className={styles.YourPlaylist}>Your Playlist:</h1>
      <Playlist playlistName={playlistName} setPlaylistName={setPlaylistName} playlistTracks={playlistTracks}></Playlist>
    </div>
  )
}

export default App
