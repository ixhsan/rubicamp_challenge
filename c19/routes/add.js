const express = require('express')
const router = express.Router()
const fs = require('fs')
let data = require('./data')

router
    .route('')
    .get((req, res) => {
        res.render('add', { data })
    })
    .post((req, res) => {
        const { string, integer, float, date, boolean } = req.body

        const dataContainer = { ID: data.length + 1, String: string, Integer: integer, Float: float, Date: date, Boolean: boolean }

        console.log(`ini lifecycle add, method post: `);
        console.log({ "add-1-req.body-string": string });
        console.log({ "add-1-req.body-integer": integer });
        console.log({ "add-1-req.body-float": float });
        console.log({ "add-1-req.body-date": date });
        console.log({ "add-1-req.body-boolean": boolean });


        for (let key in dataContainer) {
            if (!dataContainer[key]) {
                delete dataContainer[key]
            }
        }

        console.log({ "add-2-req.body": req.body});

        data.push(dataContainer)
        fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 4))
        res.redirect('/')
        // res.send({success: true, msg: 'User data added Successfully'})
    })

module.exports = router