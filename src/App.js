import React, { useState, useEffect } from 'react';
// Adds Alan AI to program
import alanBtn from '@alan-ai/alan-sdk-web';

// API key from alan.app
const alanKey = '0fa35faefbafc72ef792ac6aaac603472e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    // Gives access to newsArticles that can be displayed later
    const [newsArticles, setNewsArticles] = useState([]);

    // If [] is empty, usEffect will be called once
    useEffect(() => {
        alanBtn({
            // API key
            key: alanKey,
            // When testCommand triggered, message
            // will pop up on screen
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])


    return (
        <div>
            <h1>Alan AI News Application</h1>
        </div>
    )
}

export default App;