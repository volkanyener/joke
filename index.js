const express = require("express")

const app = express()
const page = `
<html>
  <title>Volkan Yener</title>
  <h1>Why do comedians love !false?</h1>
  <p>It's funny because it's true.</p>
</html>
`

app.get(
  "/",
  (request, response) => {
    response.send(page)
  }
)

const port = 3000
app.listen(
  port,
  () => {console.log(`Listening to port: ${port}`)}
)