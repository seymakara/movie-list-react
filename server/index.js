const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000

app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser())
console.log(__dirname)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))