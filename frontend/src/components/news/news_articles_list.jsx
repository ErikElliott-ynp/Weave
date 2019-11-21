import React, { useEffect } from "react";
import NewsArticle from "./article"

function NewsArticlesList(props) {
    useEffect( () => {
        props.fetchMostPopularNews()
        debugger
    }, [] )

    let articlesList = props.articles.map( (article, i) => {
        return <NewsArticle 
                article={article}
                key={i}
                />
    });
    return (
        
        <div className="news-arts-list-main">
            <ul className="news-list">
                {articlesList}
            </ul>

        </div>
    )
}

export default NewsArticlesList;