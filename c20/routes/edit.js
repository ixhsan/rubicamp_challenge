const express = require('express')
const router = express.Router()
let db = require('./data')

router
    .route('/:id')
    .get((req, res) => {
        const ID = req.params.id
        const sql = 'SELECT * FROM data_type WHERE ID=?'

        db.get(sql, [ID], (err, row) => {
            if (err) throw err
            console.log({ dataEdit: row })
            res.render('edit', { data: row })
        })

    })
    .post((req, res) => {
        const ID = req.params.id
        const { string, integer, float, date, boolean } = req.body
        const payLoad = {}

        payLoad.sql = `UPDATE data_type SET String = ?, Integer = ?, Float = ?, Date = ?, Boolean = ? WHERE ID=?`
        payLoad.newValue = [
            string,
            integer,
            float,
            date,
            boolean,
            ID
        ]

        db.run(payLoad.sql, payLoad.newValue, (err) => {
            if (err) throw err
            res.redirect('/')
        });
    })

module.exports = router