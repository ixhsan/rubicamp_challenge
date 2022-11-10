/* START FILE BOILER PLATE */
const express = require('express')
const app = express()

const path = require('path')
const bodyParser = require('body-parser')
const port = 3021
const filePath = path.join(__dirname, 'views')

app.set('view engine', 'ejs') // register the template engine
app.set('views', filePath) // specify the views

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/* ALL ROUTE */

/* C21 - Postgresql */
const c21_index = require('./routes/c21/index')
const c21_delete = require('./routes/c21/delete')
const c21_edit = require('./routes/c21/edit')
const c21_add = require('./routes/c21/add')
const c21_search = require('./routes/c21/search')

app.use('/c21/', c21_index)
app.use('/c21/delete', c21_delete)
app.use('/c21/edit', c21_edit)
app.use('/c21/add', c21_add)
app.use('/c21/search', c21_search)

const dbPostgres = require('./routes/c21/data_postgres')

// app.get('/test', test2(), (req, res) => {
//   res.json({ data: "test", data2: res.data })
// })

// function test2() {
//   return (req, res, next) => {
//     const { String, Integer, Float, Date, Boolean } = req.body
//     res.dataReturn = {
//       arrayData: [
//         1,
//         2,
//         3,
//         4,
//         5
//       ],

//     }
//     const filter = req.query
//     let sql = 'SELECT "ID", "String", "Integer", "Float", to_char("Date", \'YYYY-MM-DD\') AS "Date", "Boolean" FROM data_type ORDER BY "ID" ASC'
//     dbPostgres.query(sql, (err, dataRaw) => {
//       if (err) throw err

//       const page = req.query.page ? Number(req.query.page) : 1
//       const limit = 3

//       const startIndex = (page - 1) * limit
//       const endIndex = page * limit

//       res.data = dataRaw

//       //     /* Declaring the data payload */
//       //     const payLoad = {}

//       //     payLoad.numOfResults = dataRaw.rows.length
//       //     payLoad.startIndex = startIndex
//       //     payLoad.endIndex = endIndex

//       //     payLoad.numOfPages = Math.ceil(dataRaw.rows.length / limit)
//       //     payLoad.currentPage = page

//       //     /* Front-End Pagination */

//       //     if (payLoad.currentPage > payLoad.numOfPages) {
//       //         res.redirect('/c21/?page=' + encodeURIComponent(payLoad.numOfPages))
//       //     } else if (payLoad.currentPage < 1) {
//       //         res.redirect('/c21/?page=' + encodeURIComponent('1'))
//       //     }

//       //     payLoad.data = dataRaw.rows

//       //     payLoad.sql = `SELECT "ID", "String", "Integer", "Float", to_char("Date", \'YYYY-MM-DD\') AS "Date", "Boolean" FROM data_type ORDER BY "ID" ASC LIMIT ${limit} OFFSET ${startIndex}`
//       //     dbPostgres.query(payLoad.sql, (err, dataShow) => {

//       //         if (err) throw err
//       //         let iterator = (payLoad.currentPage - 5) < 1 ? 1 : payLoad.currentPage - 5
//       //         let endingLink = (iterator + 9) <= payLoad.numOfPages ? (iterator + 9) : payLoad.currentPage + (payLoad.numOfPages - payLoad.currentPage)
//       //         if (endingLink < (payLoad.currentPage + 4)) {
//       //             iterator -= (payLoad.currentPage + 5) - payLoad.numOfPages
//       //         }

//       //         payLoad.data = dataShow.rows

//       // res.render('./c21/index', { data: payLoad.data, filter, currentPage: payLoad.currentPage, numOfPages: payLoad.numOfPages, iterator, endingLink })
//       //     })
//       next()
//     })
//   }
// }

/* END FILE BOILER PLATE */
app.use(express.static('./'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})