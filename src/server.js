const express = require('express')
const compression = require('compression')

const app = express() // Create the express app
app.use(compression()) // Use gzip for all requests

// Some basic html to show
const layout =`
  <!DOCTYPE html>
  <html>
    <body>
      <h1>Oka Hachiro... He is a monster himself</h1>
    </body>
  </html>
`

app.get('/', (_, response) => { // Listen for requests to the root path
  response.send(layout) // Send the HTML string
})

app.listen(3000) // Listen for requests on port 3000
