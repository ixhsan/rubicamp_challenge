/* START FILE BOILER PLATE */
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
// const { application } = require('express')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views')) // specify the views
app.set('view engine', 'ejs') // register the template engine

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

let count = 1

/* METHODS & ROUTES */

/* MAIN ROUTE */
app.get('/', (req, res) => {
  // res.render('index', { data })
  // const { id, string, integer, float, date, boolean } = req.query
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

  console.log({"index-1-dataQuery": dataQuery});

  if (Object.entries(dataQuery).length > 0) {
    dataFiltered = data.filter(user => {
        // let isValid = true;
        for (let key in dataQuery) {

          console.log({propertyFilter: key});
          console.log({propertyData: user});
          console.log({propertyDataKey: user[key]});

            if (user[key] == dataQuery[key]) {
              return user
            }
        }
      })
  } 

  if (Object.entries(dataQuery).length === 0 || !dataFiltered.length) {
    dataFiltered = data
  }

  console.log({"index-2-req.query":filter});
  console.log({"index-3-dataFiltered": dataFiltered});
  console.log({"index-4-dataQuery": dataQuery});
  count++
  res.render('index', {data: dataFiltered, filter})
})

/* ALL ROUTE */
const editRouter = require('./routes/edit')
const addRouter = require('./routes/add')
const deleteRouter = require('./routes/delete')
let data = require('./routes/data')

app.use('/add', addRouter)
app.use('/edit', editRouter)
app.use('/delete', deleteRouter)

/* Experiment */
app.get('/test', (req, res) => {
  app.set('test', { test: "test" }) 
})

app.post('/test-example', (req, res) => {
  res.render('test-example', { retrievedData: app.get('test') })
})

/* END FILE BOILER PLATE */

app.use('/views', express.static(path.join(__dirname, 'views')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/* add key */
// for (let key in dataContainer) {
  //   if (dataContainer[key].indexOf('on') === 0) {
  //     dataContainer[key].splice(0, 1)
  //   }
  // }

  // dataContainer.ID = data.length + 1

/* edit key */
  // for (let key in data[dataId]) {
  //   if (typeof data[dataId][key] === 'object') {
  //     if (data[dataId][key].indexOf('on') === 0) {
  //       data[dataId][key].splice(0, 1)
  //     }
  //   }
  // }