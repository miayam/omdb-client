import { h } from 'preact';
import render from 'preact-render-to-string'
import App from './app';

const express = require('express')
const compression = require('compression')

const app = express(); // Create the express app
app.use(compression()); // Use gzip for all requests

const content = render(<App />);

// Some basic html to show
const layout =`
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>OMDB Client App</title>
        <link rel="icon" type="image/vnd.microsoft.icon" href="https://www.omdbapi.com/favicon.ico" />
        <link rel="stylesheet" href="client.css" />
    </head>
    <body>
      <div id="root">
        ${content}
      </div>
    </body>
    <script type="module" src="client.js" async></script>
  </html>
`

app.get('/', (_, response) => { // Listen for requests to the root path
  response.send(layout); // Send the HTML string
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
