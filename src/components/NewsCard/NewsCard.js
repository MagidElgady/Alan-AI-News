import React from 'react';

// Used to style each NewsCard
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

// Creates each news article i.e. NewsCards
const NewsCard = () => {
    return (
        <Card>
            {/* Clickable area */}
            <CardActionArea>
                <CardMedia />
            </CardActionArea>
        </Card>
    )
}

export default NewsCard;
