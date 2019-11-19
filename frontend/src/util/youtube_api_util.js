import axios from 'axios'
const key = process.env.REACT_APP_GOOGLE_API_KEY;

export const youtubeMostPopular = () => {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${key}&part=snippet&chart=mostPopular&withCredentials=true&regionCode=US`)
}

export const fetchYoutubeVideo = id => {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${key}&part=player&id=${id}&withCredentials=true`).catch(err => console.log(err))
}