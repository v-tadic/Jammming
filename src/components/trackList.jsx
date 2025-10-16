import React, {useState, useEffect} from "react"; 
import Track from './track'
import styles from '../css/trackList.module.css'

function TrackList({ playlistTracks, removeTrack }) {
    return (
        <div>
            {playlistTracks.map(track => (
                <Track
                    key={track.id}
                    id={track.id}
                    name={track.name}
                    artist={track.artist}
                    removeTrack={removeTrack}
                    trackIsInPlaylist={playlistTracks.some(t => t.id === track.id)}
                />
            ))}
        </div>
    );
}


export default TrackList