const express = require('express')
const router = express.Router()
const fs = require('fs')
let data = require('./data')

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params

        const newData = []
        for (let i = 0; i < data.length; i++) {
            if (Number(id) !== data[i].ID) {
                newData.push(data[i])
            }
        }

        data = newData
        fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 4))
        res.redirect('/')
    })

module.exports = router