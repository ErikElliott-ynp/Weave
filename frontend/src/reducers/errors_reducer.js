import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import YoutubeErrorsReducer from "./youtube_errors_reducer";
import NewsErrorsReducer from "./news_errors_reducer";

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    youtube: YoutubeErrorsReducer,
    news: NewsErrorsReducer
})

export default ErrorsReducer;
