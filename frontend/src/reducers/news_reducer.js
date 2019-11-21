import { RECEIVE_NEWS_ARTICLES, CLEAR_NEWS } from "../actions/news_actions";

const NewsReducer = ( state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_NEWS_ARTICLES:
            return Object.assign([], action.articles.data.articles)        
        case CLEAR_NEWS:
            return [];
        default:
            return state;
    }
}

export default NewsReducer;