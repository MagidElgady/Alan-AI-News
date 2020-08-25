import React, { useState, useEffect } from 'react';
// Adds Alan AI to program
import alanBtn from '@alan-ai/alan-sdk-web';

import wordsToNumbers from 'words-to-numbers';

// Imports NewsCards component
import NewsCards from './components/NewsCards/NewsCards';

// Import the Alan logo and style.js
import useStyles from './styles.js';

// API key from alan.app
const alanKey = '0fa35faefbafc72ef792ac6aaac603472e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const classes = useStyles();
    // Index of article currently being read
    const [activeArticle, setActiveArticle] = useState(-1);
    // Gives access to newsArticles that can be displayed later
    const [newsArticles, setNewsArticles] = useState([]);

    // If [] is empty, usEffect will be called once
    useEffect(() => {
        alanBtn({
            // API key
            key: alanKey,
            // When testCommand triggered, message
            // will pop up on screen
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    // Once article is read, colour at bottom
                    // moves to next article
                    setActiveArticle(-1);
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    // Used to convert words to numbers e.g. four to 4
                    // TODO: Look up fuzzy and the wordsToNumber function
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
                    // parsedNumber[20] doesn't exist which doesn't make sense
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > 20) {
                        alanBtn().playText('Please try that again...');
                    } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    } else {
                        console.log(number);
                        alanBtn().playText('Please try that again...');
                    }
                }
            },
        });
    }, []);


    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo" />

            </div>
            {/* Displays all the news articles beneath header */}
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
};

export default App;