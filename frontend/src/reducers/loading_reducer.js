import { START_LOADING_MODAL } from "../actions/loading_modal_actions";
import { RECEIVE_ALL_IMGUR_POSTS } from "../actions/imgur_actions";
import {  RECEIVE_NEWS_ARTICLES } from "../actions/news_actions";
import { RECEIVE_VIDEOS } from "../actions/youtube_actions";

const LoadingReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case START_LOADING_MODAL:
            return true;
        case RECEIVE_ALL_IMGUR_POSTS:
            return false;
        case RECEIVE_NEWS_ARTICLES:
            return false;
        case RECEIVE_VIDEOS:
            return false;
        default:
            return state;
    }
}

export default LoadingReducer;