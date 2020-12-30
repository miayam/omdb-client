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
    <body>
        ${content}
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

app.listen(3000); // Listen for requests on port 3000
