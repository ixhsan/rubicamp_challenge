/* START FILE BOILER PLATE */
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
let data = require('./routes/data')

const app = express()
const port = 3001
const filePath = path.join(__dirname, 'views')

app.set('view engine', 'ejs') // register the template engine
app.set('views', filePath) // specify the views

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/* ALL ROUTE */
const indexRouter = require('./routes/index')
const editRouter = require('./routes/edit')
const addRouter = require('./routes/add')
const deleteRouter = require('./routes/delete')
const searchRouter = require('./routes/search')

app.use('/', indexRouter)
app.use('/add', addRouter)
app.use('/edit', editRouter)
app.use('/delete', deleteRouter)
app.use('/search', searchRouter)

/* TEST ROUTE */

app.get('/TESTMIDDLE', testMiddleware(), (req, res) => {
  let dataBaru = res.nilaiBaru
  console.log(dataBaru);
  res.render('test', {data:dataBaru})
})

function testMiddleware() {
  return (res, req, next) => {
    let bilangan = 2
    console.log(`BERHASIL HAHA`)
    res.nilaiBaru = bilangan
    next()
  }
}

/* END FILE BOILER PLATE */
app.use(express.static('./'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
