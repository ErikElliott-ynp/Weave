import axios from 'axios';

export const getComments = () => {
    return axios.get('/api/tweets')
};

export const writeComment = data => {
    return axios.post('/api/tweets/', data)
}