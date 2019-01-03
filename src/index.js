const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/example', (req, res) => res.send('Example'))

app.listen(process.env.NODE_PORT || port)

module.exports = app // for testing
