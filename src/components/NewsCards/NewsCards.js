import React from 'react';
// Used for styling our cards
// Grid is for layout, Grow is for animation
// and Typography is for font style
import { Grid, Grow, Typography } from '@material-ui/core';

// Gets style code
import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({ articles }) => {
    // Sets style function to 
    const classes = useStyles();

    return (
        <Grow in >
            {/* classes.container imports styles.js code */}
            <Grid className={classes.container} container alignItems="stretch">
                {/* Loops through all news articles */}
                {articles.map((article, i) => (
                    // Sets sizes for each device e.g. 12 spaces = 1 card for xsmall devices
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }} >
                        <NewsCard article={article} i={i} />
                    </Grid>

                ))}
            </Grid>
        </Grow >
    )
}

export default NewsCards;