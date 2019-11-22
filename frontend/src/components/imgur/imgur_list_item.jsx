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

        return post.images ? (
          <div className="whole-post">
            <div className="title">{post.title}</div>
            <img className="image" src={`${post.images[0].link}`} />
          </div>
        ) : (
          <div className="whole-post">
            <div className="title">{post.title}</div>
            <img className="image" src={`${post.link}`} alt="" />
          </div>
        );};

    

export default ImgurListItem