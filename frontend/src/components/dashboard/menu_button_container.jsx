import { connect } from "react-redux";
import { fetchYoutubeMostPopular, fetchYoutubeVideo, clearVideos } from "../../actions/youtube_actions";
import MenuButton from './menu_button';

const mSTP = null;

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchYoutubeMostPopular()),
        fetchSingleVideo: id => dispatch(fetchYoutubeVideo(id)),
        clearVideos: () => dispatch(clearVideos())
    }
}

export default connect(mSTP, mDTP)(MenuButton);