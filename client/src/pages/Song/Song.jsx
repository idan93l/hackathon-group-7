import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import WriteComment from "../../components/WriteComment/WriteComment";
import "./song.css";
import CommentCard from "../../components/CommentCard/CommentCard";
import songApi from './../../api/api'
import Spinner from "../../components/Spinner/Spinner";

function Song({chosenSong}) {
    const [lyrics, setLyrics] = useState("");
    const [lang, setLang] = useState("he");
    const [comments, setComments] = useState([]);
    const [spinner, setSpinner] = useState(false)

    const lyricsRef = useRef();
    const translatedLyricsRef = useRef();

    useEffect(() => {
        chosenSong.result && getLyrics();
        chosenSong.result && getComments();
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
        // setSpinner(true)
        const response = await songApi.post("/translate", {
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
        // setSpinner(false)
    };

    const getLyrics = async () => {
        console.log(chosenSong.result.url);
        setSpinner(true)
        const response = await songApi.post(`/scrape`, {
          url: chosenSong.result.url
        });
        lyricsRef.current.innerHTML = response.data;
        response.data && setLyrics(response.data);
        setSpinner(false)
    };

    const getComments = async () => {
        setSpinner(true)
        console.log('chosen song: ',chosenSong)
        const isSongInList = await songApi.get(`/${chosenSong.result.id}`)
        console.log('song in list? ', isSongInList.data)
        setSpinner(false)
        // const response = await songApi.get(`/song/${id}/comments`);
        // setComments(response.data);
    }

    const displayComments = () => {
        return comments.map((comment) => {
            return <CommentCard key={comment._id} owner={comment.owner} comment={comment.comment} date={comment.date} />
        })
    }

    if (spinner) {
        return <Spinner />
    }
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
            <div>
                <WriteComment chosenSong = {chosenSong} lyrics = {lyrics}/>
                {displayComments()}
            </div>
        </div>
    );
}
export default Song;
