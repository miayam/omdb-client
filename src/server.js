import { h } from 'preact';
import React from 'react';
import render from 'preact-render-to-string'
import { createStore } from 'redux';
import { composedEnhancers, rootReducer } from './store';
import { Provider } from 'react-redux';
import App from './app';

const express = require('express')
const compression = require('compression')

const app = express(); // Create the express app
app.use(compression()); // Use gzip for all requests

// Some basic html to show
const layout = (preloadedState, store) => `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>OMDB Client App</title>
        <link rel="icon" type="image/vnd.microsoft.icon" href="https://www.omdbapi.com/favicon.ico" />
        <link rel="stylesheet" href="/client.css" />
    </head>
    <body>
      <div id="root">
        ${
          render(
            <Provider
              store={store}
            >
              <App />
            </Provider>
        )}
      </div>
    </body>
    <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // https://redux.js.org/recipes/server-rendering/#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
    </script>
    <script type="module" src="/client.js" async></script>
  </html>
`

app.get('/', (_, response) => { // Listen for requests to the root path
  const preloadedState = { data: [], isLoading: false };
  response.send(
    layout(
      preloadedState,
      createStore(
        rootReducer,
        preloadedState,
        composedEnhancers
      )
    )
  );
});

app.get('/movies/:id', (_, response) => { // Listen for requests to the root path
  const preloadedState = { data: [], isLoading: false };
  response.send(
    layout(
      preloadedState,
      createStore(
        rootReducer,
        preloadedState,
        composedEnhancers
      )
    )
  );
});

app.get('/client.js', (_, response) => {
  response.sendFile('client.js', {
    root: __dirname, // This will be the build folder
  });
});

app.get('/client.css', (_, response) => {
  response.sendFile('client.css', {
    root: __dirname, // This will be the build folder
  });
});

app.listen(3000); // Listen for requests on port 3000
