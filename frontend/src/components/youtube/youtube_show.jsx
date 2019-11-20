import React from "react";

function YoutubeShow(props) {
    let id = props.vidId;
    return (
        <div className='youtube-show'>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${id}`}
                frameborder="0"> 
            </iframe>
        </div>
    );
}

export default YoutubeShow;