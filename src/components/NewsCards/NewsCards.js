import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({ articles }) => {
    return (
        <div>
            {/* Loops through all news articles */}
            {articles.map((articles, i) => (
                <NewsCard />
            ))}
        </div>
    )
}

export default NewsCards;