import React, {useState, useEffect} from "react";
import styles from '../css/search.module.css'

function Search(){

    const [search, setSearch] = useState('')

    function updateSearch(e){
        setSearch(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log('submited')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.Search}>
                {/* <label htmlFor='Search'>Enter Song Name:</label> */}
                <input placeholder='Enter Song:' type="text" id="Search" onChange={updateSearch} value={search} className={styles.Input}></input>
                <button type="submit" className={styles.Button}>Search</button>
            </form>
        </div>
    )
}

export default Search