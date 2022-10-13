const express = require('express')
const router = express.Router()
const fs = require('fs')
let data = require('./data')

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params
        let dataId

        for (let i = 0; i < data.length; i++) {
            if (Number(id) === data[i].ID) {
                dataId = i
            }
        }

        res.render('edit', { data: data[dataId] })
    })
    .post((req, res) => {
        const { id } = req.params
        const { string, integer, float, date, boolean } = req.body
        let dataId

        for (let i = 0; i < data.length; i++) {
            if (Number(id) === data[i].ID) {
                dataId = i
            }
        }
        console.log(`ini lifecycle edit, method post: `);
        console.log({ editReqBody: string });
        console.log({ editReqBody: integer });
        console.log({ editReqBody: float });
        console.log({ editReqBody: date });
        console.log({ editReqBody: boolean });

        data[dataId].String = string
        data[dataId].Integer = integer
        data[dataId].Float = float
        data[dataId].Date = date
        data[dataId].Boolean = boolean

        for (let key in data[dataId]) {
            if (!data[dataId][key]) {
                delete data[dataId][key]
            }
        }

        console.log({ editReqBody: data[dataId] });

        fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 4))
        res.redirect('/')
    })

module.exports = router