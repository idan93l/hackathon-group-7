import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import WriteComment from "../../components/WriteComment/WriteComment";
import "./song.css";

function Song() {
    const [lyrics, setLyrics] = useState("");
    const [lang, setLang] = useState("");

    const lyricsRef = useRef();
    const translatedLyricsRef = useRef();

    useEffect(() => {
        getLyrics();
    }, []);

    const getLyricsContent = async (e) => {
        e.preventDefault();
        const text = lyrics
            .split(
                '<span class="ReferentFragmentVariantdesktop__Highlight-sc-1837hky-1 jShaMP">'
            )
            .join(" ")
            .split("</span>")
            .join(" ")
            .replaceAll("<br>", ",,,")
            .replace(",,, ", "");
        const response = await axios.post("http://localhost:5000/translate", {
            lang: lang,
            text: text,
        });
        console.log(response);
        const newlyrics = response.data.replaceAll(",,,", "<br>");
        translatedLyricsRef.current.innerHTML = newlyrics;
        if (lang === "he" || lang === "ar") {
            translatedLyricsRef.current.classList.add("rtl-text");
        } else {
            translatedLyricsRef.current.classList.remove("rtl-text");
        }
    };

    const getLyrics = async () => {
        const response = await axios.get(`http://localhost:5000/scrape`);
        lyricsRef.current.innerHTML = response.data;
        setLyrics(response.data);
    };

    return (
        <div className="page">
            <div className="all-lyrics-section">
                <div ref={lyricsRef} className="lyrics-container"></div>
                <div className="translated-lyrics-container">
                    <div>
                        <form className="form-container">
                            <div>
                                <input
                                    type={"radio"}
                                    id="he"
                                    name="lang"
                                    value={"he"}
                                    onChange={(e) => setLang(e.target.value)}
                                ></input>
                                <label htmlFor={"he"}>Hebrew</label>
                            </div>
                            <div>
                                <input
                                    type={"radio"}
                                    id="ar"
                                    name="lang"
                                    value={"ar"}
                                    onChange={(e) => setLang(e.target.value)}
                                ></input>
                                <label htmlFor={"ar"}>Arabic</label>
                            </div>
                            <div>
                                <input
                                    type={"radio"}
                                    id="ru"
                                    name="lang"
                                    value={"ru"}
                                    onChange={(e) => setLang(e.target.value)}
                                ></input>
                                <label htmlFor={"ru"}>Russian</label>
                            </div>
                            <input type={"submit"} onClick={getLyricsContent} value={"click"} className="form-btn"></input>
                        </form>
                    </div>
                    <div
                        ref={translatedLyricsRef}
                        className="lyrics-contianer"
                    ></div>
                </div>
            </div>
            <WriteComment />
        </div>
    );
}
export default Song;
