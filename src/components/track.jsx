import React, {useState, useEffect} from "react";
import styles from '../css/track.module.css'

function Track( {id, name, artist} ){
    return (
        <div className={styles.Track}>
            <div>
                <p className={styles.TrackName}>{name}</p>
                <p className={styles.TrackArtist}>{artist}</p>
            </div>
            <button className={styles.TrackButton}>+</button>
        </div>
    )
}

export default Track;