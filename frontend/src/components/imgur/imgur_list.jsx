import React from "react";
import ImgurListItem from "./imgur_list_item";
import Button from "@material-ui/core/Button";


class ImgurList extends React.Component{
    
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
                <Button
                    id="imgr-btn"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="search-btn"
                    onClick={() => this.props.fetchImages()}
                >
                    Refresh Images
                    </Button>
            {imgurArray}
        </div>)
    }
}

export default ImgurList