import React, { useEffect, useState } from "react";
import NewsArticle from "./news_article";
import Button from "@material-ui/core/Button";

function NewsArticlesList(props) {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.loading();
        setTimeout(() => props.fetchSearchNews(search), 1500);
        setSearch("");
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
                <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" className="search-bar" value={search} onChange={(e) => setSearch(e.currentTarget.value)} placeholder="What topic interests you?"/>
                    <Button
                        id="search-btn"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="search-btn"
                    >
                        Search
                    </Button>
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