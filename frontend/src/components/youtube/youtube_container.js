import { connect } from "react-redux";
import { fetchYoutubeSearch, clearVideos } from "../../actions/youtube_actions";
import YoutubeList from "./youtube_list";
import { startLoadingModal } from "../../actions/loading_modal_actions";

const mSTP = (state) => {
    return {
        videos: state.entities.youtubeVideos,
        errors: state.errors.youtube
    }
}

const mDTP = dispatch => {
    return {
        fetchSearch: topic => dispatch(fetchYoutubeSearch(topic)),
        clearVideos: () => dispatch(clearVideos()),
        loading: () => dispatch(startLoadingModal())
    }
}

export default connect(mSTP, mDTP)(YoutubeList);