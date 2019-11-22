export const handleYoutube = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "YouTube" && target.innerText === "Main Feed") {
        document.querySelector(".YouTube-box").style.visibility = "visible";
        props.fetchVideos();

    } else if (target.id === "YouTube" && target.innerText === "Off") {
        document.querySelector(".YouTube-box").style.visibility = "hidden";
        props.clearVideos();
    } 
};

export const handleNews = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "Google News" && target.innerText === "Main Feed") {
        document.querySelector(".GoogleNews-box").style.visibility = "visible"
        props.fetchNewsMostPopular();

    } else if (target.id === "Google News" && target.innerText === "Off") {
        document.querySelector(".GoogleNews-box").style.visibility = "hidden";
        props.clearNews();
    } 
};

export const handleImgur = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "Imgur" && target.innerText === "Main Feed") {
        document.querySelector(".Imgur-box").style.visibility = "visible"
        props.fetchTopImgur();

    } else if (target.id === "Imgur" && target.innerText === "Off") {
        document.querySelector(".Imgur-box").style.visibility = "hidden";
        props.clearImgur();
        
    } 
};

