/* START FILE BOILER PLATE */
const express = require('express')
const app = express()

const path = require('path')
const bodyParser = require('body-parser')
const port = 3020
const filePath = path.join(__dirname, 'views')

app.set('view engine', 'ejs') // register the template engine
app.set('views', filePath) // specify the views

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/* ALL ROUTE */
/* C20 - SQlite */
const indexRouter = require('./routes/c20/index')
const addRouter = require('./routes/c20/add')
const editRouter = require('./routes/c20/edit')
const deleteRouter = require('./routes/c20/delete')
const searchRouter = require('./routes/c20/search')

app.use('/', indexRouter)
app.use('/add', addRouter)
app.use('/edit', editRouter)
app.use('/delete', deleteRouter)
app.use('/search', searchRouter)

/* END FILE BOILER PLATE */
app.use(express.static('./'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})