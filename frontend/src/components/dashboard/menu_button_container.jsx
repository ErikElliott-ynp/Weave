import { connect } from "react-redux";
import { fetchYoutubeMostPopular, fetchYoutubeVideo } from "../../actions/youtube_actions";
import MenuButton from './menu_button';

const mSTP = null;

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchYoutubeMostPopular()),
        fetchSingleVideo: id => dispatch(fetchYoutubeVideo(id))
    }
}

export default connect(mSTP, mDTP)(MenuButton);