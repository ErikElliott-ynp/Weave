import { combineReducers } from "redux";
import imgurReducer from "./imgur_reducer";
import YoutubeVideosReducer from "./youtube_videos_reducer";
import NewsReducer from "./news_reducer";


    
const EntitiesReducer = combineReducers({
    youtubeVideos: YoutubeVideosReducer,
    news: NewsReducer,
    imgur: imgurReducer
})

export default EntitiesReducer;