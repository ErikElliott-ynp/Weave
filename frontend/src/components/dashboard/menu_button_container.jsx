import { connect } from "react-redux";
import { fetchYoutubeMostPopular, clearVideos } from "../../actions/youtube_actions";
import { fetchNewsMostPopular, clearNews } from "../../actions/news_actions";
import { fetchTopImgur, clearImgur } from '../../actions/imgur_actions';
import MenuButton from './menu_button';
import { startLoadingModal } from "../../actions/loading_modal_actions";

const mSTP = null;

const mDTP = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchYoutubeMostPopular()),
        clearVideos: () => dispatch(clearVideos()),
        fetchNewsMostPopular: () => dispatch(fetchNewsMostPopular()),
        clearNews: () => dispatch(clearNews()),
        fetchTopImgur: () => dispatch(fetchTopImgur()),
        clearImgur: () => dispatch(clearImgur()),
        loading: () => dispatch(startLoadingModal())
    }
}

export default connect(mSTP, mDTP)(MenuButton);