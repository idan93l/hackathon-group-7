import React, { useState } from 'react';
import axios from 'axios'
import SearchInput from '../../components/SearchInput/SearchInput'
import './search.css';

function Search() {
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    const response = await axios.get(`/search`)
  }

  const displaySongs = () => {
    return songs.map((song, i) => {
      return <div key={i}>song {i}</div>
    })
  }
  return <div className="page">
    <SearchInput />
    {displaySongs()}
  </div>
}
export default Search;
