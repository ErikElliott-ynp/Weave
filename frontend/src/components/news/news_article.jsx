import React from "react";

function NewsArticle(props) {
    let img = props.article.urlToImage ? <img src={props.article.urlToImage} className="article-img" /> : <img src="https://www.pshe-association.org.uk/sites/all/themes/PSHE/img/default-pshe-square.png" className="article-img"/>;
    let title = <a href={props.article.url} className="art-link" target="_blank"><p className="art-title">{props.article.title}</p></a>
        
    
    return (
        <div className="news-article-item-main">
            <li className="news-list-item">
                <div className="item-div">
                    {img}
                    {title}
                </div>
            </li>
        </div>
    )
}

export default NewsArticle;