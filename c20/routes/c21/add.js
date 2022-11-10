const express = require('express')
const router = express.Router()
const dbPostgres = require('./data_postgres')

router
    .route('/')
    .get((req, res) => {
        let sql = `SELECT * FROM data_type`
        dbPostgres.query(sql, (err, result) => {
            if (err) throw err
            res.render('./c21/add', { data: result.rowCount})
        })
    })
    .post((req, res) => {
        let { 
            string, 
            integer, 
            float, 
            date, 
            boolean } = req.body

        boolean = boolean ? 'True': 'False'
        
        const payLoad = {}

        payLoad.sql = `INSERT INTO data_type ("String", "Integer", "Float", "Date", "Boolean") VALUES($1,$2,$3,$4,$5)`
        payLoad.newValue = [
            string,
            integer,
            float,
            date,
            boolean
        ]

        console.log({addFile: payLoad});
        dbPostgres.query(payLoad.sql, payLoad.newValue, (err, result) => {
            if (err) throw err
            res.redirect('/c21/')
        });

    })

module.exports = router