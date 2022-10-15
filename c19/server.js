/* START FILE BOILER PLATE */
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
let data = require('./routes/data')

const app = express()
const port = 3000
const filePath = path.join(__dirname, 'views')

app.set('view engine', 'ejs') // register the template engine
app.set('views', filePath) // specify the views

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

let count = 1

/* METHODS & ROUTES */

/* MAIN ROUTE */
app.get('/', (req, res) => {
  const filter = req.query
  let dataFiltered = []

  let dataQuery = {
    "ID": filter.id,
    "String": filter.string,
    "Integer": filter.integer,
    "Float": filter.float,
    "Date": filter.date,
    "Boolean": filter.boolean
  }

  for (let key in dataQuery) {
    if (!dataQuery[key]) {
      delete dataQuery[key]
    }
  }

  // console.log({"index-1-dataQuery": dataQuery});

  if (Object.entries(dataQuery).length > 0) {
    dataFiltered = data.filter(user => {
        // let isValid = true;
        for (let key in dataQuery) {

          // console.log({propertyFilter: key});
          // console.log({propertyData: user});
          // console.log({propertyDataKey: user[key]});

            if (user[key] == dataQuery[key]) {
              return user
            }
        }
      })
  } 

  if (Object.entries(dataQuery).length === 0 || !dataFiltered.length) {
    dataFiltered = data
  }

  // console.log({"index-2-req.query":filter});
  // console.log({"index-3-dataFiltered": dataFiltered});
  // console.log({"index-4-dataQuery": dataQuery});
  // console.log({viewsSetting: req.app.get('views')});

  /* Code-Base Pagination */

  const page = req.query.page ? Number(req.query.page) : 1
  const limit = 3

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const payLoad = {}
  
  if (endIndex < dataFiltered.length) {
    payLoad.next = {
      page: page + 1
    }
  }

  if (startIndex > 0) {
    payLoad.previous = {
      page: page - 1
    }
  }

  payLoad.numOfResults = dataFiltered.length
  payLoad.startIndex = startIndex
  payLoad.endIndex = endIndex
  
  payLoad.numOfPages = Math.ceil(dataFiltered.length / limit)
  payLoad.currentPage = page

  // console.log(payLoad);

  /* Front-End Pagination */

  if (payLoad.currentPage > payLoad.numOfPages) {
    res.redirect('/?page='+encodeURIComponent(payLoad.numOfPages))
  } else if (payLoad.currentPage < 1) {
    res.redirect('/?page='+encodeURIComponent('1'))
  }

  payLoad.results = dataFiltered.slice(startIndex, endIndex)

  // console.log(payLoad.results);
  // console.log({checkModuleChildren: module.children});

  let iterator = (payLoad.currentPage - 5) < 1 ? 1 : payLoad.currentPage - 5
  let endingLink = (iterator + 9) <= payLoad.numOfPages ? (iterator + 9) : payLoad.currentPage + (payLoad.numOfPages - payLoad.currentPage)
  if (endingLink < (payLoad.currentPage + 4)){
    iterator -= (payLoad.currentPage + 5) - payLoad.numOfPages
  }

  count++
  res.render('index', {data: payLoad.results, filter, iterator, currentPage: payLoad.currentPage, numOfPages: payLoad.numOfPages, endingLink})
})

/* ALL ROUTE */
const editRouter = require('./routes/edit')
const addRouter = require('./routes/add')
const deleteRouter = require('./routes/delete')

app.use('/add', addRouter)
app.use('/edit', editRouter)
app.use('/delete', deleteRouter)

/* EXPERIMENT ROUTE */
// app.get('/test', (req, res) => {
//   const page = parseInt(req.query.page)
//   const limit = 3

//   const startIndex = (page - 1) * limit
//   const endIndex = page * limit

//   const payLoad = {}
  
//   if (endIndex < data.length) {
//     payLoad.next = {
//       page: page + 1
//     }
//   }

//   if (startIndex > 0) {
//     payLoad.previous = {
//       page: page - 1
//     }
//   }

//   payLoad.startIndex = startIndex
//   payLoad.endIndex = endIndex
//   payLoad.pages = Math.ceil(data.length / limit)

//   payLoad.results = data.slice(startIndex, endIndex)
//   res.json(payLoad)
// })

/* END FILE BOILER PLATE */
app.use(express.static('./'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
