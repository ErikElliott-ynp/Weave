import React, { useState, useEffect } from 'react';
import YoutubeListItem from "./youtube_list_item";
import Button from "@material-ui/core/Button";


class YoutubeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearVideos();
        debugger
        this.props.fetchSearch({ topic: this.state.search } )
    }

    handleChange(e) {
        this.setState({ search: e.currentTarget.value })
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
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" className="search-bar" value={this.state.search} onChange={(e) => this.handleChange(e)} placeholder="What are you looking?" />
                    <Button
                        id="search-btn"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="search-btn"
                    >
                        Search
                    </Button>
                </form>
                {list}
            </div>
        )
    }
}

export default YoutubeList;