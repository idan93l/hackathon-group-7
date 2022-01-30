import React from "react";
import { useState } from "react";

import myApi from "../../api/api";
import CommentCard from "../CommentCard/CommentCard";

function WriteComment() {
  const [userComment, setUserComment] = useState("");
  const [userOwner, setUserOwner] = useState("");

  const inputComment = (el) => {
    setUserComment(el.target.value);
  };
  const inputOwner = (el) => {
    setUserOwner(el.target.value);
  };
  const handleComment = async () => {
    const { data } = await myApi.post(`/song`, {
      comment: userComment,
      date: new Date(),
      owner: userOwner,
    });
    console.log(data);
    data.map((el) => {
      return (
        <div key={el._id}>{CommentCard(el.comment, el.date, el.owner)}</div>
      );
    });
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
    </div>
  );
}
export default WriteComment;
