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
                <form id="imgur-search" onSubmit={(e) => this.handleSubmit(e)}>
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
                <Button
                    id="imgr-btn"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="search-btn"
                    onClick={() => this.props.fetchImages()}
                >
                    Top Images
                    </Button>
            {imgurArray}
        </div>)
    }
}

export default ImgurList