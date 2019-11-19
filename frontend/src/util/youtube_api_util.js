import axios from 'axios'
const key = process.env.REACT_APP_GOOGLE_API_KEY;

export const youtubeMostPopular = () => {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&chart=mostPopular&regionCode=US`)
}