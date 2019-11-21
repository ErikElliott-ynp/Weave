import { combineReducers } from "redux";
import YoutubeVideosReducer from "./youtube_videos_reducer";
import NewsReducer from "./news_reducer";

const EntitiesReducer = combineReducers({
    youtubeVideos: YoutubeVideosReducer,
    news: NewsReducer
})

export default EntitiesReducer;