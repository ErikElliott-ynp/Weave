import axios from "axios";

export const fetchImgurTopPosts = () =>
       { return axios.get("https://api.imgur.com/3/gallery/hot/viral/0.json");};


export const fetchImgurSearch = topic => {
    return axios.get(`https://api.imgur.com/3/gallery/search/viral/day/0?q=${topic}`)
}

export const backendImgurTop = () => {
    return axios.get('/api/imgur/topPosts')
}

export const backendImgurSearch = (topic) => {
    return axios.post('/api/imgur/search', {
        topic
    })
} 