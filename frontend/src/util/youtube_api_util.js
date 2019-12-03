import axios from 'axios'
const key = require('../keys')

export const youtubeMostPopular = () => {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${key.youtubeApiKey}&chart=mostPopular&regionCode=US`)
}

export const fetchYoutubeSearch = topic => {
    return axios.post(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=${topic.topic}&type=video&key=${key.youtubeApiKey}`,{
        topic
    } )
}


export const backendFetch = () => {
    return axios.get('/api/youtube/youtubeMostPopular')
}

export const backendYoutubeSearch = (topic) => {
    return axios.post('/api/youtube/youtubeSearch', {
        topic
    })
}