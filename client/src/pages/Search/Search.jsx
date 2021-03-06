import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import songApi from './../../api/api'
import Spinner from '../../components/Spinner/Spinner';
import SearchInput from '../../components/SearchInput/SearchInput'
import './search.css';

function Search({setChosenSong}) {
  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState('')
  const [spinner, setSpinner] = useState(false)

  const getSongs = async () => {
    try {
      setSpinner(true)
      const response = await songApi.post(`/search`, {
        query
      })
      setSongs(response.data)
    } catch(err){
      console.log(err)
    }
    setSpinner(false)
  }

  const displaySongs = () => {
    return songs.map((song) => {
      return <div onClick={() => handleChooseSong(song)}  key={song.result.id} className='song-item'>{song.result.artist_names} - {song.result.title}</div>
    })
  }

  const handleChooseSong = (song) => {
    setChosenSong(song)
    navigate("/song")
  }

  useEffect(() => {
   query && getSongs()
  },[query])

  if (spinner) {
    return <Spinner />
  }
  return <div className="page">
    <SearchInput query={query} handleClick={setQuery} />
    {displaySongs()}
  </div>
}
export default Search;
