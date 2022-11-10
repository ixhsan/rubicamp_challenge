const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3002;

app.set('views', './views'); // specify the views directory
app.set('view engine', 'ejs'); // register the template engine

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));

const readJson = fs.readFileSync('./data/series.json');
let data = JSON.parse(readJson);

/* ROUTING PAGE */
// HOME PAGE + EDIT PAGE
app.get('/', (req, res) => {
    // res.render('index', { data });
    const { filter } = req.query
    let filterData = []

    if (filter) {
        for (let dt of data) {
            if (
                dt.Title.toLowerCase() === filter.toLowerCase() ||
                dt.Country.toLowerCase() === filter.toLowerCase() ||
                dt.ID === parseFloat(filter)
            ) {
                filterData.push(dt)
            }
        }
    }
    if (!filter) {
        filterData = data
    }
    console.log({reqFilterData: filterData});
    res.render('index', { data: filterData, filter })
});

// ADD PAGE
app.get('/add', (req, res) => {
    res.render('add', { data });
});

/* DATA METHOD */

// method for adding data
app.post('/add', (req, res) => {
    const { title, country } = req.body

    data.push({ ID: data.length + 1, Title: title, Country: country })
    fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4))
    res.redirect('/')
})

/* Method for editing data */
// Routing to the page via GET
app.get('/edit/:id', (req, res) => {
    const { id } = req.params
    let dataId

    for (let i = 0; i < data.length; i++) {
        if (Number(id) === data[i].ID) {
            dataId = i
        }
    }

    res.render('edit', { data: data[dataId] })
})

// Method to execute and save edited data via POST
app.post('/edit/:id', (req, res) => {
    const { id } = req.params
    const { title, country } = req.body

    let dataId
    for (let i = 0; i < data.length; i++) {
        if (Number(id) === data[i].ID) {
            dataId = i
        }
    }

    data[dataId].Title = title
    data[dataId].Country = country

    fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4))
    res.redirect('/')
})

/* Method for deleting data */
app.get('/delete/:id', (req, res) => {
    const { id } = req.params

    const newData = []
    for (let i = 0; i < data.length; i++) {
        if (Number(id) !== data[i].ID) {
            newData.push(data[i])
        }
    }

    data = newData
    fs.writeFileSync('./data/series.json', JSON.stringify(data, null, 4))
    res.redirect('/')
})

app.listen(port, () => console.log(`json-bread listening on port ${port}!`));