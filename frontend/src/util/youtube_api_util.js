import axios from 'axios'
const key = require('../keys')

export const youtubeMostPopular = () => {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${key.youtubeApiKey}&chart=mostPopular&regionCode=US`)
}

export const fetchYoutubeSearch = topic => {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=${topic.topic}&type=video&key=${key}` )
}


export const backendFetch = () => {
    return axios.get('/api/youtube/youtubeMostPopular')
}
