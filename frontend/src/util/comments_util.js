import axios from 'axios';

export const getComments = () => {
    return axios.get('/api/comments')
};

export const writeComment = data => {
    return axios.post('/api/comments/', data)
}