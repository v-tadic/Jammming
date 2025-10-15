import React, {useState, useEffect} from "react";
import TrackList from "./trackList";
import styles from '../css/playlist.module.css'

function Playlist(){

    const [playlistName, setPlaylistName] = useState('')

    function handleChange(e){
        setPlaylistName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(playlistName)
    }

    return (
        <div className={styles.Playlist}>
            <form onSubmit={handleSubmit}>
                <div className={styles.InputContainer}>
                    <input type="text" name="PlaylistName" placeholder="Enter Playlist Name" onChange={handleChange} value={playlistName} className={styles.PlayListName}></input>
                </div>
                <TrackList></TrackList>
                <div className={styles.ButtonContainer}>
                     <button type="Submit" className={styles.SaveToSpotify}>Save To Spotify</button>
                </div>
            </form>
        </div>
    )
}

export default Playlist