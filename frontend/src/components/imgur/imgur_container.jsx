import { connect } from 'react-redux'
import ImgurList from "./imgur_list";
import { fetchTopPosts } from "../../actions/imgur_actions";


const mapStateToProps = (state) => {
    return {
        imgurPosts: state.entities.imgur
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchImages: () => dispatch(fetchTopPosts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgurList)