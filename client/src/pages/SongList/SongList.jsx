import React, { useState } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput'
import './songList.css';

function SongList() {
  const [songs, setSongs] = useState([]);

  const handleSearch = (e) => {
    setSongs([]);
  }

  const displaySongs = () => {
    return songs.map((song, i) => {
      return <div key={i}>song {i}</div>
    })
  }

  return <div className="page">
      <div>
          <SearchInput clickHandle={handleSearch} />
      </div>
      <div>
        {displaySongs()}
      </div>
    </div>;
}
export default SongList;
