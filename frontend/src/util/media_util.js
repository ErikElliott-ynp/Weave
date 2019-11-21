export const handleMedia = (media, event, props) => {
    const target = event.currentTarget;
    if (target.id === media && target.innerText === "Main Feed") {
        document.querySelector(`.${media}-box`).style.visibility = "visible";
        props.fetchVideos();
    } else if (target.id === media && target.innerText === "Off") {
        document.querySelector(`.${media}-box`).style.visibility = "hidden";
        props.clearVideos();
    } 
};

