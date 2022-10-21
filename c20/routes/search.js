const express = require('express')
const router = express.Router()
let db = require('./data')

router
    .route('/')
    .get((req, res) => {
        const filter = req.query
        
        const payLoad = {}
        const queryList = [
            { ID: filter.id },
            { String: filter.string },
            { Integer: filter.integer },
            { Float: filter.float },
            { Date: filter.date },
            { Boolean: filter.boolean }
        ]
        
        payLoad.lookFor = queryList.map((item, index) => {
            let newValue = item[Object.keys(item).toString()]
            if (newValue) {
                let key = Object.keys(item)
                return `${key} LIKE "%${newValue}%"`
            }
        }).filter(item => item)
        
        payLoad.lookForQuery = payLoad.lookFor.join(' AND ')
        payLoad.sql = 'SELECT * FROM data_type WHERE ' + payLoad.lookForQuery

        
        db.all(payLoad.sql, (err, row) => {
            payLoad.data = row
            console.log(payLoad);
            res.render('search', {data: payLoad.data, filter})
        })
        // let sql = 'SELECT * FROM data_type WHERE'
        // db.all(sql, (err, data) => {
        //     if (err) throw err

        //     const page = req.query.page ? Number(req.query.page) : 1
        //     const limit = 3

        //     const startIndex = (page - 1) * limit
        //     const endIndex = page * limit

        //     /* Declaring the data payload */
        //     const payLoad = {}

        //     payLoad.numOfResults = data.length
        //     payLoad.startIndex = startIndex
        //     payLoad.endIndex = endIndex

        //     payLoad.numOfPages = Math.ceil(data.length / limit)
        //     payLoad.currentPage = page

        //     /* Front-End Pagination */

        //     if (payLoad.currentPage > payLoad.numOfPages) {
        //         res.redirect('/?page=' + encodeURIComponent(payLoad.numOfPages))
        //     } else if (payLoad.currentPage < 1) {
        //         res.redirect('/?page=' + encodeURIComponent('1'))
        //     }

        //     payLoad.sql = `SELECT * FROM data_type LIMIT ${startIndex},${limit}`
        //     db.all(payLoad.sql, (err, row) => {

        //         if (err) throw err
        //         let iterator = (payLoad.currentPage - 5) < 1 ? 1 : payLoad.currentPage - 5
        //         let endingLink = (iterator + 9) <= payLoad.numOfPages ? (iterator + 9) : payLoad.currentPage + (payLoad.numOfPages - payLoad.currentPage)
        //         if (endingLink < (payLoad.currentPage + 4)) {
        //             iterator -= (payLoad.currentPage + 5) - payLoad.numOfPages
        //         }

        //         console.log({
        //             message: `Database Connected`,
        //             test: row.length,
        //             data: row
        //         });
                
        //         res.render('index', { data: row, filter, currentPage: payLoad.currentPage, numOfPages: payLoad.numOfPages, iterator, endingLink })
        //     })
        // })

        

    })

module.exports = router