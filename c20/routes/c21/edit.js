const express = require('express')
const router = express.Router()
const dbPostgres = require('./data_postgres')

router
    .route('/:id')
    .get((req, res) => {
        const ID = parseInt(req.params.id)
        const sql = 'SELECT "ID", "String", "Integer", "Float", to_char("Date", \'YYYY-MM-DD\') AS "Date", "Boolean" FROM data_type WHERE "ID"=$1'

        dbPostgres.query(sql, [ID], (err, result) => {
            if (err) throw err
            console.log({ dataEdit: result.rows })
            res.render('./c21/edit', { data: result.rows[0] })
        })

    })
    .post((req, res) => {
        const ID = req.params.id
        const { string, integer, float, date, boolean } = req.body
        const payLoad = {}

        payLoad.sql = `UPDATE data_type SET "String" = $1, "Integer" = $2, "Float" = $3, "Date" = $4, "Boolean" = $5 WHERE "ID" = $6`
        payLoad.newValue = [
            string,
            integer,
            float,
            date,
            boolean,
            ID
        ]
        console.table(date)
        dbPostgres.query(payLoad.sql, payLoad.newValue, (err, result) => {
            if (err) throw err
            res.redirect('/c21/')
        });
    })

module.exports = router