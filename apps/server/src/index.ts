import express from 'express'

const app = express()
const port = 4000

app.get('/', (_req, res) => {
  res.send('Hello World Haha!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
