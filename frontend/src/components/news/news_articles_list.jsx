import React, { useEffect, useState } from "react";
import NewsArticle from "./news_article"

function NewsArticlesList(props) {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchSearchNews(search)
    }

    let articlesList = props.articles.map( (article, i) => {
        return <NewsArticle 
                article={article}
                key={i}
                />
    });
    
    return (
        <div className="news-cont">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" className="search-bar" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
                <input type="submit" className="search-btn" value="Search"/>
            </form>
            <ul className="news-list">
                {articlesList}
            </ul>
            <p className="credit-tag">Powered by NewsAPI</p>
        </div>
    )
}

export default NewsArticlesList;