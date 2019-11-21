import React from 'react';
import YoutubeContainer from "../youtube/youtube_container";
import NewsArticlesListContainer from "../news/news_articles_list_container";

class Dashboard extends React.Component {
    render() {
        return (
        // <YoutubeContainer />
        <NewsArticlesListContainer />
        )
    }
}

export default Dashboard;