import React, { useState, useEffect } from 'react';
import YoutubeListItem from "./youtube_list_item"

class YoutubeList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
    }


    render () {
        let list = <ul className="youtube-list">
            {this.props.videos.map(vid => {
                return <YoutubeListItem
                    vid={vid}
                    fetchSingleVideo={this.props.fetchSingleVideo}
                />
            })}
        </ul>
        return (
            <div className="youtube-cont">
                {list}
            </div>
        )
    }
}

export default YoutubeList;