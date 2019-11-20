import { combineReducers } from "redux";
import youtubeVideosReducer from "./youtube_videos_reducer";

const EntitiesReducer = combineReducers({
    youtubeVideos: youtubeVideosReducer
})

export default EntitiesReducer;