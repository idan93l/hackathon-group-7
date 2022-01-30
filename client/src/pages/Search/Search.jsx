import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import './search.css';

function Search() {
  const [lyrics, setLyrics] = useState("");

  const lyricsRef = useRef();

  useEffect(() => {
    getLyrics();
  }, [])

  const getLyrics = async () => {
    const response = await axios.get("http://localhost:5000/scrape");
    console.log(response);
    setLyrics(response.data)
    lyricsRef.current.innerHTML = response.data
  }

  return <div className="page">
    <div ref={lyricsRef}></div>
  </div>;
}
export default Search;
