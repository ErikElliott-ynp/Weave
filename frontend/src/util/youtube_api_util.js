import axios from 'axios'
const key = process.env.REACT_APP_GOOGLE_API_KEY;

export const youtubeMostPopular = () => {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${key}&chart=mostPopular&regionCode=US`)
}

export const fetchYoutubeSearch = topic => {
    debugger
    return axios.get('api/youtube/youtubeSearch', topic )
}


export const backendFetch = () => {
    return axios.get('/api/youtube/youtubeMostPopular')
}
