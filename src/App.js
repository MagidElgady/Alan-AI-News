import React, { useEffect } from 'react';
// Adds Alan AI to program
import alanBtn from '@alan-ai/alan-sdk-web';

// API key from alan.app
const alanKey = '0fa35faefbafc72ef792ac6aaac603472e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    // If [] is empty, usEffect will be called once
    useEffect(() => {
        alanBtn({
            // API key
            key: alanKey,
        })
    }, [])


    return (
        <div>
            <h1>Alan AI News Application</h1>
        </div>
    )
}

export default App;