import axios from 'axios';
const key = process.env.REACT_APP_NEWS_API_KEY;

export const newsUSMostPopular = () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`)
}

export const newsSearchTopic = topic => {
    let url = `https://newsapi.org/v2/everything?` +
                `q=${topic}&sortBy=popularity&`
                + `apiKey=${key}`;

    return axios.get(`${url}`);
}