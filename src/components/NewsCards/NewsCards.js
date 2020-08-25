import React from 'react';

const NewsCards = ({ articles }) => {
    return (
        <div>
            {articles.map((articles, i) => (
                <NewsCard />
            ))}
        </div>
    )
}

export default NewsCards;