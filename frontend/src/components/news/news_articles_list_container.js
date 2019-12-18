import { connect } from "react-redux";
import { fetchNewsBySearchTopic} from "../../actions/news_actions";
import NewsArticlesList from "./news_articles_list";
import { startLoadingModal } from "../../actions/loading_modal_actions";

const mSTP = state => {
    return {
        articles: state.entities.news
    }
}

const mDTP = dispatch => {
    return {
        // fetchMostPopularNews: () => dispatch(fetchNewsMostPopular()),
        fetchSearchNews: topic => dispatch(fetchNewsBySearchTopic(topic)),
        loading: () => dispatch(startLoadingModal()),
    }
}

export default connect(mSTP, mDTP)(NewsArticlesList)