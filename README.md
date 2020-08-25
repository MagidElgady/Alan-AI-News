This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Introduction
Uses Alan AI and the ReactJS framework to present users with news article 
based on voice input. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Requirements
@alan-ai/alan-sdk-web

useState, useEffect

wordstoNumbers

@material-ui/core


# Installation
To install the Alan AI button <br />
import alanBtn from '@alan-ai/alan-sdk-web';

To install the Alan AI button <br />
import React, { useState, useEffect } from 'react';

Used to convert spoken number from words to a number e.g. 'four' becomes 4 <br />
import wordsToNumbers from 'words-to-numbers';

Material UI used for the font, grid styling and grow for the animations <br />
import { Grid, Grow, Typography } from '@material-ui/core';


# Configuration
-------------

The module has no menu or modifiable settings. There is no configuration. When
enabled, the module will prevent the links from appearing. To get the links
back, disable the module and clear caches.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Credits
Used to access al the news information
News API: <br />
https://newsapi.org/


Required to access Alan Studio and link with code
Alan AI: <br />
https://alan.app/

YouTube tutorial followed:
https://www.youtube.com/watch?v=rqw3OftE5sA



