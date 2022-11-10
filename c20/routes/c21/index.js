const express = require('express')
const router = express.Router()
const dbPostgres = require('./data_postgres')

router
    .route('/')
    .get((req, res) => {
        const filter = req.query
        let sql = 'SELECT "ID", "String", "Integer", "Float", to_char("Date", \'YYYY-MM-DD\') AS "Date", "Boolean" FROM data_type ORDER BY "ID" ASC'
        dbPostgres.query(sql, (err, dataRaw) => {
            if (err) throw err

            const page = req.query.page ? Number(req.query.page) : 1
            const limit = 3

            const startIndex = (page - 1) * limit
            const endIndex = page * limit

            /* Declaring the data payload */
            const payLoad = {}

            payLoad.numOfResults = dataRaw.rows.length
            payLoad.startIndex = startIndex
            payLoad.endIndex = endIndex

            payLoad.numOfPages = Math.ceil(dataRaw.rows.length / limit)
            payLoad.currentPage = page

            /* Front-End Pagination */

            if (payLoad.currentPage > payLoad.numOfPages) {
                res.redirect('/c21/?page=' + encodeURIComponent(payLoad.numOfPages))
            } else if (payLoad.currentPage < 1) {
                res.redirect('/c21/?page=' + encodeURIComponent('1'))
            }

            payLoad.data = dataRaw.rows

            payLoad.sql = `SELECT "ID", "String", "Integer", "Float", to_char("Date", \'YYYY-MM-DD\') AS "Date", "Boolean" FROM data_type ORDER BY "ID" ASC LIMIT ${limit} OFFSET ${startIndex}`
            dbPostgres.query(payLoad.sql, (err, dataShow) => {

                if (err) throw err
                let iterator = (payLoad.currentPage - 5) < 1 ? 1 : payLoad.currentPage - 5
                let endingLink = (iterator + 9) <= payLoad.numOfPages ? (iterator + 9) : payLoad.currentPage + (payLoad.numOfPages - payLoad.currentPage)
                if (endingLink < (payLoad.currentPage + 4)) {
                    iterator -= (payLoad.currentPage + 5) - payLoad.numOfPages
                }

                payLoad.data = dataShow.rows

                res.render('./c21/index', { data: payLoad.data, filter, currentPage: payLoad.currentPage, numOfPages: payLoad.numOfPages, iterator, endingLink })
            })
        })

    })

module.exports = router