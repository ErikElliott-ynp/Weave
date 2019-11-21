import { RECEIVE_NEWS_ARTICLES } from "../actions/news_actions";

const NewsReducer = ( state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_NEWS_ARTICLES:
            return Object.assign({}, action.type)        
        default:
            return state;
    }
}

export default NewsReducer;