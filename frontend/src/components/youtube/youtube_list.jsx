import React, { useState, useEffect } from 'react';

function YoutubeList(props) {
    useEffect(() => {
        props.fetchVideos(), []
    })
    return (
        <div className="youtube-cont">
            <ul className="youtube-list">
                {props.videos.map(vid => {
                    return <YoutubeListItem vid={vid} />
                })}
            </ul>
        </div>
    )
} 

export default YoutubeList;