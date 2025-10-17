import React, {useState, useEffect} from "react"; 
import Track from './track'
import styles from '../css/trackList.module.css'

function TrackList({ playlistTracks, removeTrack } ) {
    return (
        <div>
            {playlistTracks.map(track => (
                <Track
                    uri={track.uri}
                    key={track.id}
                    id={track.id}
                    name={track.name}
                    artist={track.artist}
                    removeTrack={removeTrack}
                    trackIsInPlaylist={true}
                />
            ))}
        </div>
    );
}


export default TrackList