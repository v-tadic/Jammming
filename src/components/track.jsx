import React, {useState, useEffect} from "react";
import styles from '../css/track.module.css'


function Track({name, artist, uri, addTrackToPlaylist, removeTrack, trackIsInPlaylist }) {
    if (trackIsInPlaylist) {
        return (
            <div className={styles.Track}>
                <div>
                    <p className={styles.TrackName}>{name}</p>
                    <p className={styles.TrackArtist}>{artist}</p>
                </div>
                <button className={styles.TrackButton} onClick={() => removeTrack({name, artist, uri })}>-</button>
            </div>
        );
    } else {
        return (
            <div className={styles.Track}>
                <div>
                    <p className={styles.TrackName}>{name}</p>
                    <p className={styles.TrackArtist}>{artist}</p>
                </div>
                <button className={styles.TrackButton} onClick={() => addTrackToPlaylist({name, artist, uri })}>+</button>
            </div>
        );
    }
}


export default Track;