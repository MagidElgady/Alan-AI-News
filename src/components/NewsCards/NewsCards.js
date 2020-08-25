import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

// Used for styling our cards
// Grid is for layout, Grow is for animation
// and Typography is for font style
import { Grid, Grow, Typography } from '@material-ui/core';

const NewsCards = ({ articles }) => {
    return (
        <Grow>
            {/* Loops through all news articles */}
            {articles.map((articles, i) => (
                <NewsCard />
            ))}
        </div>
    )
}

export default NewsCards;