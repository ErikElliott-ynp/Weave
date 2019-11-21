import * as NewsAPIUtil from "../util/news_api_util";

export const RECEIVE_NEWS_ARTICLES = "RECEIVE_NEWS_ARTICLES";
export const CLEAR_NEWS_ARTICLES  = "CLEAR_NEWS_ARTICLES";
export const RECEIVE_NEWS_ERRORS = "RECEIVE_NEWS_ERRORS";

const receiveNewsArticles = articles => {
    return {
        type: RECEIVE_NEWS_ARTICLES,
        articles
    }
}

export const clearNewsArticles = () => {
    return {
        type: CLEAR_NEWS_ARTICLES
    }
}

const receiveNewsErrors = errors => {
    return {
        type: RECEIVE_NEWS_ERRORS,
        errors
    }
}

export const fetchNewsMostPopular = () => dispatch => {
    return NewsAPIUtil.newsUSMostPopular
        .then( articles => dispatch(receiveNewsArticles(articles)),
        errors => dispatch(receiveNewsErrors(errors))
        )
}

export const fetchNewsBySearchTopic = topic => dispatch => {
    return NewsAPIUtil.newsSearchTopic(topid)
        .then( articles => dispatch(receiveNewsArticles(articles)),
        errors => dispatch(receiveNewsErrors(errors))
        )
}