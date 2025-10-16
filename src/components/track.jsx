import React, {useState, useEffect} from "react";
import styles from '../css/track.module.css'

function Track( {id, name, artist, addTrackToPlaylist} ){

    return (
        <div className={styles.Track}>
            <div>
                <p className={styles.TrackName}>{name}</p>
                <p className={styles.TrackArtist}>{artist}</p>
            </div>
            <button className={styles.TrackButton}   onClick={() => addTrackToPlaylist({ id, name, artist })}>+</button>
        </div>
    )
}

export default Track;