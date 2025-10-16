import React from "react";
import Track from './track';
import styles from '../css/searchResults.module.css';

function SearchResults({ resultsData, addTrackToPlaylist }) {
    return (
        <div className={styles.SearchResults}>
            {resultsData.map((track, index) => (
                <Track addTrackToPlaylist={addTrackToPlaylist}
                    key={index}
                    id={track.id}
                    name={track.name}
                    artist={track.artist}
                />
            ))}
        </div>
    );
}

export default SearchResults;
