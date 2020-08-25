import React from 'react';
// Used for styling our cards
// Grid is for layout, Grow is for animation
// and Typography is for font style
import { Grid, Grow, Typography } from '@material-ui/core';

// Gets style code
import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology News' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with the PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles }) => {
    // Sets style function to 
    const classes = useStyles();

    // If no new articles, display this
    if (!articles.length) {
        return (
            <Grow in >
                {/* classes.container imports styles.js code */}
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {/* If infoCard has no info, show following typography */}
                                {infoCard.info ? <Typography variant="h6"><strong> {/* Splits title into array and grabs last value in e.g. categories or terms */} {infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}{/* If info isn't found, return null */}</Typography> : null}
                                <Typography variant="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                            </div>

                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }

    return (
        <Grow in >
            {/* classes.container imports styles.js code */}
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
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