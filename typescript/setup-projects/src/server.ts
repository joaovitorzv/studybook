import express from 'express'

import '@controllers/UserController'

const app = express()

app.get('/', (req, res) => {
  return res.json({ working: false })
})

app.listen(3333)
