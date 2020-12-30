const express = require('express')
const compression = require('compression')
import render from 'preact-render-to-string'
import { h } from 'preact';

const app = express(); // Create the express app
app.use(compression()); // Use gzip for all requests

const content = render(
    <h1>
        Oka Hachiro... He is a monster himself
    </h1>
);

// Some basic html to show
const layout =`
  <!DOCTYPE html>
  <html>
    <body>
        ${content}
    </body>
  </html>
`

app.get('/', (_, response) => { // Listen for requests to the root path
  response.send(layout) // Send the HTML string
})

app.listen(3000) // Listen for requests on port 3000
