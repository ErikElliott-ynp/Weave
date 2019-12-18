
export const handleYoutube = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "YouTube" && target.innerText === "Main Feed") {
        props.loading();
        setTimeout(() => props.fetchVideos().then(() => document.getElementById("youtube-box").classList.remove("hidden")), 1000);
        
            
    } else if (target.id === "YouTube" && target.innerText === "Off") {
        document.getElementById("youtube-box").classList.add("hidden");
        props.clearVideos();
    } 
};

export const handleNews = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "News" && target.innerText === "Main Feed") {
        props.loading();
        setTimeout(() => props.fetchNewsMostPopular().then(() => document.getElementById("news-box").classList.remove("hidden")), 2000);

    } else if (target.id === "News" && target.innerText === "Off") {
        props.clearNews();
        document.getElementById("news-box").classList.add("hidden");
    } 
};

export const handleImgur = (event, props) => {
    const target = event.currentTarget;
    if (target.id === "Imgur" && target.innerText === "Main Feed") {
        props.loading();
        setTimeout(() => props.fetchTopImgur().then(() => document.getElementById("imgur-box").classList.remove("hidden")), 2000)

    } else if (target.id === "Imgur" && target.innerText === "Off") {
        document.getElementById("imgur-box").classList.add("hidden");
        props.clearImgur();
    } 
};

