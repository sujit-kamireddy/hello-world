const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  res.send('Hello Node World!');
})

app.listen(8080, () => console.log('Hello World Nodejs listening on port 8080!'))