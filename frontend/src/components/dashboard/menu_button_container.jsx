import { connect } from "react-redux";
import { fetchYoutubeMostPopular, fetchYoutubeVideo, clearVideos } from "../../actions/youtube_actions";
import { fetchNewsMostPopular, clearNews } from "../../actions/news_actions";
import { fetchTopImgur, clearImgur } from '../../actions/imgur_actions';
import MenuButton from './menu_button';

const mSTP = null;

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchYoutubeMostPopular()),
        fetchSingleVideo: id => dispatch(fetchYoutubeVideo(id)),
        clearVideos: () => dispatch(clearVideos()),

        fetchNewsMostPopular: () => dispatch(fetchNewsMostPopular()),
        clearNews: () => dispatch(clearNews()),

        fetchTopImgur: () => dispatch(fetchTopImgur()),
        clearImgur: () => dispatch(clearImgur())
    }
}

export default connect(mSTP, mDTP)(MenuButton);