const express = require('express')
const router = express.Router()
let db = require('./data')

router
    .route('/')
    .get((req, res) => {
        let sql = `SELECT count(ID) AS totalData FROM data_type`
        db.get(sql, (err, row) => {
            if (err) throw err
            const payLoad = {
                totalData: row['totalData']
            }
            res.render('./c20/add', { data: payLoad.totalData})
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

        payLoad.sql = `INSERT INTO data_type(String, Integer, Float, Date, Boolean) VALUES(?,?,?,?,?)`
        payLoad.newValue = [
            string,
            integer,
            float,
            date,
            boolean
        ]

        db.run(payLoad.sql, payLoad.newValue, (err) => {
            if (err) throw err
            res.redirect('/')
        });

    })

module.exports = router