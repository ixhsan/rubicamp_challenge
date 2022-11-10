const express = require('express')
const router = express.Router()
const dbPostgres = require('./data_postgres')

router
    .route('/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id)
        const sql = 'DELETE FROM data_type WHERE "ID" = $1'

        console.log(sql);
        dbPostgres.query(sql, [id],(err, result) => {
            if (err) throw err
            console.log(`berhasil`);
            res.redirect('/c21/')
        })
    })

module.exports = router