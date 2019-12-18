
export const handleYoutube = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "YouTube" && target.innerText === "Main Feed") {
        props.fetchVideos()
            .then(() => document.querySelector(".YouTube-box").style.display = "inherit")

    } else if (target.id === "YouTube" && target.innerText === "Off") {
        document.querySelector(".YouTube-box").style.display = "none";
        props.clearVideos();
    } 
};

export const handleNews = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "News" && target.innerText === "Main Feed") {
        props.fetchNewsMostPopular()
            .then(() => document.querySelector(".GoogleNews-box").style.display = "inherit")

    } else if (target.id === "News" && target.innerText === "Off") {
        props.clearNews();
        document.querySelector(".GoogleNews-box").style.display = "none";
    } 
};

export const handleImgur = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "Imgur" && target.innerText === "Main Feed") {
        props.fetchTopImgur()
            .then( () => document.querySelector(".Imgur-box").style.display = "inherit")

    } else if (target.id === "Imgur" && target.innerText === "Off") {
        document.querySelector(".Imgur-box").style.display = "none";
        props.clearImgur();
    } 
};

