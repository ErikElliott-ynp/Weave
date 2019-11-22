import axios from 'axios'
const key = process.env.REACT_APP_GOOGLE_API_KEY;

export const youtubeMostPopular = () => {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${key}&chart=mostPopular&regionCode=US`)
}

export const fetchYoutubeVideo = id => {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${key}&part=player&id=${id}&withCredentials=true`)
}

export const backendFetch = () => {
    return axios.get('/api/youtube/youtubeMostPopular')
}
