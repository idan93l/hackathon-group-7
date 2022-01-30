import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import WriteComment from "../../components/WriteComment/WriteComment";
import './song.css'

function Song() {
  const [lyrics, setLyrics] = useState("");
  const [translatedLyrics, setTranslatedLyrics] = useState("");
  const [lang, setLang] = useState("")

  const lyricsRef = useRef();
  const translatedLyricsRef = useRef();

  useEffect(() => {
    getLyrics();
  }, [])

  const getLyricsContent = async () => {
    const text = lyrics.split('<span class="ReferentFragmentVariantdesktop__Highlight-sc-1837hky-1 jShaMP">').join(" ").split("</span>").join(" ").replaceAll("<br>", ",,,").replace(",,, ", "")
    const response = await axios.post("http://localhost:5000/translate", {
      lang: "he",  
      text: text
    })
    const newlyrics = response.data[0].text.replaceAll(",,,", "<br>")
    translatedLyricsRef.current.innerHTML = newlyrics
    setTranslatedLyrics(newlyrics)
  }

  const getLyrics = async () => {
    const response = await axios.get("http://localhost:5000/scrape");
    lyricsRef.current.innerHTML = response.data
    setLyrics(response.data)
  }

  return (
    <div className="page">
      <div ref={lyricsRef}></div>
      <div ref={translatedLyricsRef} className='rtl-text'> {translatedLyrics}</div>
      <button onClick={getLyricsContent}>click</button>
      <WriteComment />
    </div>
  );
}
export default Song;
