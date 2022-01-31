import React, { useState, useEffect } from 'react';
import songApi from './../../api/api'
import axios from 'axios'
import SearchInput from '../../components/SearchInput/SearchInput'
import './search.css';

function Search({setChosenSong}) {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState('')

  const getSongs = async () => {
    try {
      const response = await songApi.post(`/search`, {
        query
      })
      setSongs(response.data)
    } catch(err){
      console.log(err)
    }
  }

  const displaySongs = () => {
    return songs.map((song, i) => {
      return <div onClick={() => setChosenSong(song)}  key={song.result.id}>{song.result.artist_names} - {song.result.title}</div>
    })
  }

  useEffect(() => {
   query && getSongs()
  },[query])
  return <div className="page">
    <SearchInput query={query} handleClick={setQuery} />
    {displaySongs()}
  </div>
}
export default Search;
