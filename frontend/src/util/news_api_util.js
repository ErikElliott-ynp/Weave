import axios from 'axios';

export const backendPopularNews = () => {
    return axios.get(`/api/news/popularNews`)
}

export const backendNewsSearch = (topic) => {
    return axios.post('/api/news/newsSearch', {
        topic
    })
}