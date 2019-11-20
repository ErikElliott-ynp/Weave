import React from "react";
import YoutubeShow from "./youtube_show";

class YoutubeListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPage: false
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState( {showPage: !this.state.showPage} );
    }
    
    render() {
        debugger; 
        let title = this.props.vid.snippet.title;
        let thumbnail = <img src={this.props.vid.snippet.thumbnails.default.url} alt="thumbnail" className="vid-thumb"/>
        let id = this.props.vid.id
        if (!this.state.showPage) {
            return (
            <li 
            onClick={this.handleClick}
            className="vid-list-item">
                {thumbnail}
                {title}
            </li>
            )
        } else {
            return (
            <div>
                <YoutubeShow vidId={id} />
                <div className='youtube-show-close' onClick={this.handleClick} >X</div>
            </div>
            )
        }
    }
}

export default YoutubeListItem;