import React from "react";
import Track from './track';
import styles from '../css/searchResults.module.css';

function SearchResults({ tracks, addTrackToPlaylist}) {
    return (
        <div className={styles.SearchResults}>
            {tracks.map((track, index) => (
                <Track addTrackToPlaylist={addTrackToPlaylist}
                    key={index}
                    uri={track.uri}
                    id={track.id}
                    name={track.name}
                    artist={track.artist}
                />
            ))}
        </div>
    );
}

export default SearchResults;
