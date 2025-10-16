import React from "react";
import Track from './track';
import styles from '../css/searchResults.module.css';

function SearchResults({ resultsData }) {
    return (
        <div className={styles.SearchResults}>
            {resultsData.map((track, index) => (
                <Track
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
