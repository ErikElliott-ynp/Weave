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
        let title = <p className="title-youtube">{this.props.vid.snippet.title}</p>;
        let thumbnail = <img src={this.props.vid.snippet.thumbnails.default.url} alt="thumbnail" className="vid-thumb"/>
        let id = this.props.vid.id
        if (!this.state.showPage) {
            return (
            <li>
                <div  
                onClick={this.handleClick}
                className="vid-list-item">

                    {thumbnail}
                    {title}
            </div>
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