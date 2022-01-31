import React from "react";
import "./commentCard.css"


function CommentCard({ text, date, owner }) {
  {console.log("CommentCard",text)}
  return <div className="CommentCard">
    <div>{owner}:</div>
    <div>{text}</div>
    <div>{date.slice(0,10)}</div>
  </div>;
}

export default CommentCard;
