import React, {useState, useEffect} from "react"; 
import Track from './track'
import styles from '../css/trackList.module.css'

function TrackList( {playlistTracks} ){
    return (
        <div>
            {playlistTracks.map((track, index) => (
                <Track
                    key={index}
                    id={track.id}
                    name={track.name}
                    artist={track.artist}
                />
            ))}
        </div>
    )
}

export default TrackList