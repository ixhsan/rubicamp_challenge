const express = require('express')
const router = express.Router()
const db = require('./data')

router
    .route('/:id')
    .get((req, res) => {
        const ID = req.params.id
        const sql = "DELETE FROM data_type WHERE ID=?"

        db.run(sql, [ID], function (err) {
            if (err) throw err
            if (this.changes) {
                console.log(`berhasil`);
                res.redirect('/')
            } else {
                console.log(`gagal`);
                res.redirect('/')
            }
        })
    })

module.exports = router