const express = require('express')
const cors = require('cors');

const app = express()
const port = 8080

app.use(cors());

app.get('/api/users', (req, res) => {
  res.send(
      require('./data.json')
  )
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
