import React, { useState, useEffect, createRef } from 'react';

// Used to style each NewsCard
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import classNames from 'classnames';

import useStyle from './styles';

// Creates card for each News Article with all the info we want
const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
    const classes = useStyle();
    // Creates refs for each article and stores in array
    const [elRefs, setElRefs] = useState([]);
    // Scrolls to near the top of card
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    // Maps all 20 articles into an array at start
    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    // Run every time a new article is read (i or activeArticle or elRefs changes)
    useEffect(() => {
        if (i === activeArticle && elRefs(activeArticle)) {
            scrollToRef(elRefs[activeArticle]);
        }

    }, [i, activeArticle, elRefs])

    return (
        <Card className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            {/* News Card will open article in new page when clicked on*/}
            <CardActionArea href={url} target="_blank">
                {/* Displays image of news company or placeholder image */}
                <CardMedia className={classes.media} image={urlToImage || 'https://www.indiafellow.org/blog/wp-content/uploads/2020/05/Marketplace-Lending-News.jpg'} />
                <div className={classes.details}>
                    {/* Shows date article was published */}
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea >
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card >
    )
}

export default NewsCard;
