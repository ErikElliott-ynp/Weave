import { connect } from 'react-redux'
import ImgurList from "./imgur_list";
import { fetchTopImgur, fetchImgurSearch, clearImgur } from "../../actions/imgur_actions";
import { startLoadingModal } from "../../actions/loading_modal_actions";


const mapStateToProps = (state) => {
    return {
        imgurPosts: state.entities.imgur
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchImages: () => dispatch(fetchTopImgur()),
      fetchSearch: topic => dispatch(fetchImgurSearch(topic)),
      clear: () => dispatch(clearImgur()),
      loading: () => dispatch(startLoadingModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgurList)