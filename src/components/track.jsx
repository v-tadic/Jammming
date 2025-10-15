import React, {useState, useEffect} from "react";
import styles from '../css/track.module.css'

function Track(){
    return (
        <div className={styles.Track}>
            <div>
                <p className={styles.TrackName}>Name</p>
                <p className={styles.TrackArtist}>Artist Name</p>
            </div>
            <button className={styles.TrackButton}>+</button>
        </div>
    )
}

export default Track;