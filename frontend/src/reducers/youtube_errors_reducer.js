import { RECEIVE_YOUTUBE_ERRORS} from "../actions/youtube_actions";


const YoutubeErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_YOUTUBE_ERRORS:
            return action.errors        
        default:
            return state;
    }
}

export default YoutubeErrorsReducer;