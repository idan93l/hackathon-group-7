import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import WriteComment from "../../components/WriteComment/WriteComment";
import songApi from './../../api/api'
import './song.css'

function Song({chosenSong}) {
  const [lyrics, setLyrics] = useState("");
  const [lang, setLang] = useState("")

  const lyricsRef = useRef();
  const translatedLyricsRef = useRef();

  useEffect(() => {
    chosenSong && getLyrics();
  }, [chosenSong,lang])

  const getLyricsContent = async () => {
    const text = lyrics.split('<span class="ReferentFragmentVariantdesktop__Highlight-sc-1837hky-1 jShaMP">').join(" ").split("</span>").join(" ").replaceAll("<br>", ",,,").replace(",,, ", "")
    const response = await songApi.post("/translate", {
      lang: lang,  
      text: text
    })
    const newlyrics = response.data[0].text.replaceAll(",,,", "<br>")
    translatedLyricsRef.current.innerHTML = newlyrics
  }

  const getLyrics = async () => {
    const response = await songApi.get("/scrape");
    lyricsRef.current.innerHTML = response.data
    setLyrics(response.data)
  }

  return (
    <div className="page">
      <div className='all-lyrics-section'>
        <div ref={lyricsRef} className='lyrics-container'></div>
        <div className='translated-lyrics-container'>
          <div>
            <div>
              <input type={"radio"} id='he' name='lang' value={"he"}></input>
              <label for={"he"}>Hebrew</label>
            </div>
            <div>
              <input type={"radio"} id='ar' name='lang' value={"ar"}></input>
              <label for={"ar"}>Arabic</label>
            </div>
            <div>
              <input type={"radio"} id='ru' name='lang' value={"ru"}></input>
              <label for={"ru"}>Russian</label>
            </div>
            <button onClick={getLyricsContent}>click</button>
          </div>
          <div ref={translatedLyricsRef} className='lyrics-contianer'></div>
        </div>
      </div>
      <WriteComment />
    </div>
  );
}
export default Song;
