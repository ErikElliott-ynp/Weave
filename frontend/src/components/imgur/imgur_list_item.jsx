import React from "react";

const ImgurListItem = ({post}) => {
    
    // return (
    //     post.type === "image/jpeg" ?
    //     <div>
    //     <div>{post.title}</div>
    //     <img src={`${post.link}`}/>
    //     </div>
    //     :
        
    //     ( if (post.images) return {
    //        <div>
    //          <img src={`${post.images[0].link}`}/>
    //        </div> }

    //      ))};

        return (
        post.images ?
        <div>
            <div>{post.title}</div>
            <img src={`${post.images[0].link}`}/>
        </div>
        :
        <img src={`${post.link}`} alt=""/>
        )};

    

export default ImgurListItem