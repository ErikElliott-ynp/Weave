import { connect } from 'react-redux'
import ImgurList from "./imgur_list";
import { fetchTopImgur, fetchImgurSearch } from "../../actions/imgur_actions";


const mapStateToProps = (state) => {
    return {
        imgurPosts: state.entities.imgur
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchImages: () => dispatch(fetchTopImgur()),
      fetchSearch: topic => dispatch(fetchImgurSearch(topic))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgurList)