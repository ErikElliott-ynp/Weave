import React from "react";
import ImgurListItem from "./imgur_list_item";

class ImgurList extends React.Component{
    
componentDidMount(){
    this.props.fetchImages();
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

        // {Object.values(this.props.posts).map
        //         (post => <PostIndexItem key={post.id}
        //             className="singlePost" post={post} />)}

        return( 
        <div>{imgurArray}</div>)
    }
}

export default ImgurList