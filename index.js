const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send("Twitter found!")
})

app.get('/login', (req, res) => {
    res.send("Login page here")
})

app.get('/chai', (req, res)=> {
    res.send("<h1>Thanks chai aur backend</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})