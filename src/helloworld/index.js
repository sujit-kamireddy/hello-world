const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  let frontendMessage = `Hello Node World!`;
  res.send(`${frontendMessage}`);
})

app.listen(8080, () => console.log('Hello World Nodejs listening on port 8080!'))