import React from "react";

const ImgurListItem = ({post}) => {
   let link;
  if (post.images) {
    link = post.images[0].gifv ? post.images[0].gifv : post.images[0].link

  }
  let img = post.images ? (
    <div className="whole-post">
      <div className="title">{post.title}</div>
      <img className="image" src={`${link}`} />
    </div>
  ) : (
      <div className="whole-post">
        <div className="title">{post.title}</div>
        <img className="image" src={`${post.link}`}  />
      </div>
    );
    
    return (
      <div>
        {img}
      </div>
      )
};
      
      

export default ImgurListItem