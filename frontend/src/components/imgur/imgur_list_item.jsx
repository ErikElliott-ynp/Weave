import React from "react";

const ImgurListItem = ({post}) => {
   let link;
   let gifLink;
  if (post.images) {
    // link = post.images[0].gifv ? post.images[0].gifv : post.images[0].lin
    if (post.images[0].gifv) {
      gifLink = post.images[0].gifv[post.images[0].gifv.length - 1] === "v"
        ? post.images[0].gifv.slice(0, post.images[0].gifv.length - 1)
        : post.images[0].gifv }

    link = gifLink ? gifLink : post.images[0].link
    // link = post.gifv ? post.gifv.slice(0, post.gifv.length-1) : link
  }
  let img
  if (post.images) {img = (
    <div className="whole-post">
      <div className="title">{post.title}</div>
      <img className="image" src={`${link}`} />
      {/* <img className="image" src="https://i.imgur.com/mI5aWZo.gifv" /> */}
    </div>
  )} else if (post.gifv) {
    img = (
    <div className="whole-post">
      <div className="title">{post.title}</div>
      <img className="image" src={`${post.gifv.slice(0, post.gifv.length-1)}`} />
    </div>
  )
  }
  else {img = (
    <div className="whole-post">
      <div className="title">{post.title}</div>
      <img className="image" src={`${post.link}`} />
    </div>
  )};
  // let img = post.images ? (
  //   <div className="whole-post">
  //     <div className="title">{post.title}</div>
  //     <img className="image" src={`${link}`} />
  //     {/* <img className="image" src="https://i.imgur.com/mI5aWZo.gifv" /> */}
  //   </div>
  // ) : (
  //   <div className="whole-post">
  //     <div className="title">{post.title}</div>
  //     <img className="image" src={`${post.link}`} />
  //   </div>
  // );
    
    return (
      <div>
        {img}
      </div>
      )
};
      
      

export default ImgurListItem