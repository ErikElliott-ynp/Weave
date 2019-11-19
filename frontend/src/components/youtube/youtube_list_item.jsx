import React from "react";

function YoutubeListItem(props) {
    let title = props.vid.snippet.title;
    let thumbnail = <img src={props.vid.snippet.thumbnails.default.url} className="vid-thumb"/>
    return (
        <li className="vid-list-item">
            {thumbnail}
            {title}
        </li>
    )
}