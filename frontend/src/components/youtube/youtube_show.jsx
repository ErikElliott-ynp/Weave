import React from "react";

function YoutubeShow(props) {
    let id = "";
    if (typeof props.vidId === "object") {
        id = props.vidId.videoId;
    } else {
        id = props.vidId;
    }
    
    return (
        <div className='youtube-show'>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"> 
            </iframe>
        </div>
    );
}

export default YoutubeShow;