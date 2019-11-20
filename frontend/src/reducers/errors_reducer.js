import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import YoutubeErrorsReducer from "./youtube_errors_reducer";

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    youtube: YoutubeErrorsReducer
})

export default ErrorsReducer;
