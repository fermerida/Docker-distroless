const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, Fernando Andrés Mérida Anton - 201314713')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})