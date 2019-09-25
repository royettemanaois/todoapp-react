import React from 'react';

const Article = ({ article }) => (
    <div className="article">
        <a href={article.webURL} className="article-link">
            <img src={`https://static01.nyt.com/${article.imageURL}`} alt="" className="article-image" title={article.title} />
        </a>
    </div>
);

export default Article;