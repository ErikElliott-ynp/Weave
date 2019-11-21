import { connect } from "react-redux";
import { fetchNewsMostPopular, fetchNewsBySearchTopic} from "../../actions/news_actions";
import NewsArticlesList from "./news_articles_list";

const mSTP = state => {
    return {
        articles: state.entities.news
    }
}

const mDTP = dispatch => {
    return {
        fetchMostPopularNews: () => dispatch(fetchNewsMostPopular()),
        fetchSearchNews: topic => dispatch(fetchNewsBySearchTopic(topic))
    }
}

export default connect(mSTP, mDTP)(NewsArticlesList)