import React, { useState, useEffect } from 'react';
import YoutubeListItem from "./youtube_list_item"

class YoutubeList extends React.Component {
    constructor(props) {
        super(props)

        this.testClick = this.testClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    testClick() {
        this.props.fetchVideos();
    }


    render() {
        let list = <ul className="youtube-list">
            {this.props.videos.map(vid => {
                return <YoutubeListItem
                    key={vid.id}
                    vid={vid}
                    fetchSingleVideo={this.props.fetchSingleVideo}
                />
            })}
        </ul>
        return (
            <div className="youtube-cont">
                {list}
                <div className="button" onClick={this.testClick} > CLICK ME TO FETCH</div>
            </div>
        )
    }
}

export default YoutubeList;