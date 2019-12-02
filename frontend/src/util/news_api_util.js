import axios from 'axios';
const key = require('../keys');

export const newsUSMostPopular = () => {
    debugger
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key.newsApiKey}`)
}

export const newsSearchTopic = topic => {
    let url = `https://newsapi.org/v2/everything?` +
                `q=${topic}&sortBy=relevance&`
                + `apiKey=${key.newsApiKey}`;

    return axios.get(`${url}`);
}

