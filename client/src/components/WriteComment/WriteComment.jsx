import React from "react";
import { useState, useEffect } from "react";

import myApi from "../../api/api";
import CommentCard from "../CommentCard/CommentCard";

function WriteComment({chosenSong, lyrics}) {
  const [userComment, setUserComment] = useState("");
  const [userOwner, setUserOwner] = useState("");
  const [flag, setFlag] = useState(false);
  const [comments, setComment] = useState([])

  useEffect (()=> {

  },[flag])

  const inputComment = (el) => {
    setUserComment(el.target.value);
  };
  const inputOwner = (el) => {
    setUserOwner(el.target.value);
  };
  const handleComment = async () => {
    const { data } = await myApi.post(`/`, {
      songId: Number(chosenSong.result.id),
      songName: chosenSong.result.title,
      songArtist: chosenSong.result.artist_names,
      lyrics:lyrics,
      comments: [{
        text: userComment,
        owner: userOwner,
        date: new Date(),
      }]
    });
    setFlag(!flag);
    setComment(data.comments);
  };
  return (
    <div className="page">
      <input
        onChange={inputComment}
        value={userComment}
        placeholder="Write a comment..."
      ></input>
      <input
        onChange={inputOwner}
        value={userOwner}
        placeholder="Owner"
      ></input>
      <button onClick={handleComment}>Add</button>
      {comments.map((el) => {
        console.log(el);
        return (
          <CommentCard key={el._id} text={el.text} date={el.date} owner={el.owner}/>
      )})}
    </div>
  );
}
export default WriteComment;
