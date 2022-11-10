/* SETUP SERVER */
const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')
const port = 3022
const filePath = path.join(__dirname, 'views')

async function main() {
  try {
    /* SETUP DATABASE */
    // or as an es module:
    // import { MongoClient } from 'mongodb'
    const { MongoClient } = require('mongodb');

    // Connection URL
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    // Database Name
    const dbName = 'data_exp';

    // Use connect method to connect to the server
    await client.connect();
    console.log('Database succesfully connected (mongosh)');
    const db = client.db(dbName);
    // const collection = db.collection('documents');

    // the following code examples can be pasted here...

    return db

  } catch (err) {
    throw 'gagal bro'
  }
}

main()
  .then((db) => {
    /* SETUP SERVER */
    const app = express()
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    app.use(bodyParser.json())
    app.set('view engine', 'ejs') // register the template engine
    app.set('views', filePath) // specify the views
    // app.use(express.urlencoded({ extended: false }))
    // app.use(express.json())
    app.use(express.static('./'))

    /* ALL ROUTE - C22*/
    const c22_index = require('./routes/c22/index')(db)
    // const c22_edit = require('./routes/c22/edit')(db)
    const c22_add = require('./routes/c22/add')(db)
    const c22_data = require('./routes/c22/data')(db)

    app.use('/', c22_index)
    app.use('/add', c22_add)
    app.use('/data', c22_data)

    /* END BOILERPLATE */

    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.log("gagal bro", err);
  })

