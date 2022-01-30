import React from "react";


export default  function SongContainer (props){
    return (
        <div>
            <div className="songContainer song-name"> 
        {props.songName}
            </div>
            <div className="songContainer writer-name">
                {props.writerName}
            </div>
            <div>
                {props.lyrics}
            </div>
        </div>
    )
}