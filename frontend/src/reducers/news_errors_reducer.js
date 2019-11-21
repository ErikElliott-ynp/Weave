import { RECEIVE_NEWS_ERRORS } from "../actions/news_actions";

const NewsErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_NEWS_ERRORS:
            return action.type        
        default:
            return state;
    }
}

export default NewsErrorsReducer;