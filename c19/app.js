const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views')) // specify the views
app.set('view engine', 'ejs') // register the template engine

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const readJson = fs.readFileSync('./data/data.json')
const data = JSON.parse(readJson)

// All route and method

app.get('/', (req, res) => {
  // console.log(__dirname)
  res.render('index', { data })
  // res.render('list')
  //   res.send('Hello World!')
})

app.get('/add', (req, res) => {
  // console.log(__dirname)
  res.render('add', { data })
  // res.render('list')
  //   res.send('Hello World!')
})

app.use(express.static(__dirname = 'views'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})