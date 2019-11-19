import axios from 'axios'

export const youtubeMostPopular = () => {
    return axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDLtt-3WUmoHD5HVlLloA2IXVIylv6JgP4&part=snippet&chart=mostPopular&regionCode=US')
}