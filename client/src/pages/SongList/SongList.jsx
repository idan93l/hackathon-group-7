import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import SearchInput from '../../components/SearchInput/SearchInput'
import songApi from './../../api/api'
import './songList.css';
import Spinner from '../../components/Spinner/Spinner';

function SongList({setChosenSong}) {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [spinner, setSpinner] = useState(false)

  const displaySongs = () => {
    return songs.map((song) => {
      return <div onClick={() => handleChooseSong(song)} key={song.songId} className='song-item'>{song.songArtist} - {song.songName}</div>
    })
  }

  const handleChooseSong = (song) => {
    setChosenSong(song)
    navigate("/song")
  }

  const getSongs = async () => {
    try {
      setSpinner(true)
      const songList = await songApi.get('/')
      setSongs(songList.data)
    } catch (err) {
      console.log(err);
    }
    setSpinner(false)
  }

  useEffect(() => {
    getSongs()
  }, [])


  if (spinner) {
    return <Spinner />
  }
  return <div className="page">
      <div>
        {displaySongs()}
      </div>
    </div>;
}
export default SongList;
