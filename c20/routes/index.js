const express = require('express')
const router = express.Router()
let db = require('./data')

router
    .route('/')
    .get((req, res) => {
        const filter = req.query
        let sql = 'SELECT * FROM data_type'
        db.all(sql, (err, data) => {
            if (err) throw err

            const page = req.query.page ? Number(req.query.page) : 1
            const limit = 3

            const startIndex = (page - 1) * limit
            const endIndex = page * limit

            /* Declaring the data payload */
            const payLoad = {}

            payLoad.numOfResults = data.length
            payLoad.startIndex = startIndex
            payLoad.endIndex = endIndex

            payLoad.numOfPages = Math.ceil(data.length / limit)
            payLoad.currentPage = page

            /* Front-End Pagination */

            if (payLoad.currentPage > payLoad.numOfPages) {
                res.redirect('/?page=' + encodeURIComponent(payLoad.numOfPages))
            } else if (payLoad.currentPage < 1) {
                res.redirect('/?page=' + encodeURIComponent('1'))
            }

            payLoad.sql = `SELECT * FROM data_type LIMIT ${startIndex},${limit}`
            db.all(payLoad.sql, (err, row) => {

                if (err) throw err
                let iterator = (payLoad.currentPage - 5) < 1 ? 1 : payLoad.currentPage - 5
                let endingLink = (iterator + 9) <= payLoad.numOfPages ? (iterator + 9) : payLoad.currentPage + (payLoad.numOfPages - payLoad.currentPage)
                if (endingLink < (payLoad.currentPage + 4)) {
                    iterator -= (payLoad.currentPage + 5) - payLoad.numOfPages
                }

                // console.log({
                //     message: `Database Connected`,
                //     test: row.length,
                //     data: row
                // });
                
                res.render('index', { data: row, filter, currentPage: payLoad.currentPage, numOfPages: payLoad.numOfPages, iterator, endingLink })
            })
        })

    })

module.exports = router