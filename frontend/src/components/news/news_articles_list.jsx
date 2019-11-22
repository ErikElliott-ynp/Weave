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
            <div className="search-cont">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" className="search-bar" value={search} onChange={(e) => setSearch(e.currentTarget.value)} placeholder="What topic interests you?"/>
                    <input type="submit" className="search-btn" value="Search"/>
                </form>
            </div>
            <ul className="news-list">
                {articlesList}
            </ul>
            <p className="credit-tag">Powered by NewsAPI</p>
        </div>
    )
}

export default NewsArticlesList;