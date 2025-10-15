import React, {useState, useEffect} from "react";
import Track from './track'
import styles from '../css/searchResults.module.css'

function SearchResults(){
    return (
        <div className={styles.SearchResults}>
            <Track></Track>
        </div>
    )
}

export default SearchResults