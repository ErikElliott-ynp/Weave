import React, { useState, useEffect } from 'react';

function YoutubeList(props) {
    useEffect(() => {
        props.fetchVideos(), []
    })

    let list = <ul className="youtube-list">
        {props.videos.map(vid => {
            return <YoutubeListItem 
                    vid={vid}
                    fetchSingleVideo={props.fetchSingleVideo}
                    />
        })}
        </ul>
    return (
        <div className="youtube-cont">
            {list}
        </div>
    )
} 

export default YoutubeList;