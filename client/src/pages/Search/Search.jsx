import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchInput from '../../components/SearchInput/SearchInput'
import './search.css';

function Search({setChosenSong}) {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState('')

  const getSongs = async () => {
    const response = await axios.post(`/search`, {
      body: query
    })
  }

  const displaySongs = () => {
    return songs.map((song, i) => {
      return <div key={i}>song {i}</div>
    })
  }

  useEffect(() => {
    getSongs()
  },[query])
  return <div className="page">
    <SearchInput query={query} handleClick={setQuery} />
    {displaySongs()}
  </div>
}
export default Search;
