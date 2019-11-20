import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from "../actions/youtube_actions";

const youtubeVideosReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state)
    switch (action.type) {
        case RECEIVE_VIDEOS:
            return nextState.concat(action.videos);
        case RECEIVE_VIDEO:
            nextState.push(action.video.item[0])
        default:
            return state;
    }
}

export default youtubeVideosReducer