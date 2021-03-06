import React from "react";
import ImgurListItem from "./imgur_list_item";
import Button from "@material-ui/core/Button";


class ImgurList extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            search: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearch( this.state.search )
        this.setState({ search: "" })
    }

    handleChange(e) {
        this.setState({ search: e.currentTarget.value })
    }

    handleImgurTop() {
        this.props.loading();
        this.props.clear();
        setTimeout(() => this.props.fetchImages(), 800);
        
    }

    
render(){
        let imgurArray = <div className="imgur-posts">
            {this.props.imgurPosts.map((post, i) => 
                <ImgurListItem 
                    key={i}
                    className="imgur-item" post={post}
                />
                )}
        </div>


        return( 
        <div className="imgur-grid">
                {/* <form id="imgur-search" onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" className="search-bar" value={this.state.search} onChange={(e) => this.handleChange(e)} placeholder="What are you looking?" />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="search-btn"
                    >
                        Search
                    </Button>
                </form> */}
                <Button
                    id="imgr-btn"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="search-btn"
                    onClick={() => this.handleImgurTop()}
                >
                    Top Images
                    </Button>
            {imgurArray}
        </div>)
    }
}

export default ImgurList