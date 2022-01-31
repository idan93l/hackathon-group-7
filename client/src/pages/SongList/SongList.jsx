import React, { useState, useEffect } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput'
import songApi from './../../api/api'
import './songList.css';
import Spinner from '../../components/Spinner/Spinner';

function SongList({setChosenSong}) {
  const [songs, setSongs] = useState([]);



  const displaySongs = () => {
    return songs.map((song) => {
      return <div onClick={() => setChosenSong(song)} key={song.songId}>{song.songArtist} - {song.songName}</div>
    })
  }

  const getSongs = async () => {
    const songList = await songApi.get('/')
    setSongs(songList.data)
  }

  useEffect(() => {
    getSongs()
  }, [])


  return <div className="page">
    <Spinner></Spinner>
      {/* <div>
        {displaySongs()}
      </div> */}
    </div>;
}
export default SongList;
