import React, { useEffect, useState } from "react";
import NewsArticle from "./news_article"

function NewsArticlesList(props) {
    const [search, setSearch] = useState("");

    useEffect( () => {
        props.fetchMostPopularNews()
    }, [] );

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchSearchNews(search)
    }

    const handleChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    let articlesList = props.articles.map( (article, i) => {
        return <NewsArticle 
                article={article}
                key={i}
                />
    });
    return (
        
        <div className="news-arts-list-main">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" className="search-bar" value={search} onChange={(e) => handleChange(e)}  />
                <input type="submit" className="search-btn" value="Search"/>
            </form>
            <ul className="news-list">
                {articlesList}
            </ul>

        </div>
    )
}

export default NewsArticlesList;