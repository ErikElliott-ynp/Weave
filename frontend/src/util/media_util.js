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

export const handleImgr = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "Imgr" && target.innerText === "Main Feed") {
        document.querySelector(".Imgr-box").style.visibility = "visible"
    } else if (target.id === "Imgr" && target.innerText === "Off") {
        document.querySelector(".Imgr-box").style.visibility = "hidden";
        
    } 
};

export const handleSpotify = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "Spotify" && target.innerText === "Main Feed") {
        document.querySelector("Spotify-box").style.visibility = "visible"
    } else if (target.id === "Spotify" && target.innerText === "Off") {
        document.querySelector("Spotify-box").style.visibility = "hidden";
        
    } 
};

