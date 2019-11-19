import { connect } from "react-redux";
import { fetchYoutubeMostPopular, fetchYoutubeVideo } from "../../actions/youtube_actions";
import Youtube from "./youtube_list";

const mSTP = (state) => {
    return {
        videos: state.entitites.youtubeVideos,
        errors: state.errors.youtube
    }
}

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchYoutubeMostPopular()),
        fetchSingleVideo: id => dispatch(fetchYoutubeVideo(id))
    }
}

export default connect(mSTP, mDTP)(YoutubeList);