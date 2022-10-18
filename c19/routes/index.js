const express = require('express')
const router = express.Router()
const fs = require('fs')
let data = require('./data')

router
    .route('/')
    .get((req, res) => {
        const filter = req.query

        /* Code-Base Pagination */

        const page = req.query.page ? Number(req.query.page) : 1
        const limit = 3

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const payLoad = {}

        if (endIndex < data.length) {
            payLoad.next = {
                page: page + 1
            }
        }

        if (startIndex > 0) {
            payLoad.previous = {
                page: page - 1
            }
        }

        payLoad.numOfResults = data.length
        payLoad.startIndex = startIndex
        payLoad.endIndex = endIndex

        payLoad.numOfPages = Math.ceil(data.length / limit)
        payLoad.currentPage = page

        // console.log(payLoad);

        /* Front-End Pagination */

        if (payLoad.currentPage > payLoad.numOfPages) {
            res.redirect('/?page=' + encodeURIComponent(payLoad.numOfPages))
        } else if (payLoad.currentPage < 1) {
            res.redirect('/?page=' + encodeURIComponent('1'))
        }

        payLoad.results = data.slice(startIndex, endIndex)

        // console.log(payLoad.results);
        // console.log({checkModuleChildren: module.children});

        let iterator = (payLoad.currentPage - 5) < 1 ? 1 : payLoad.currentPage - 5
        let endingLink = (iterator + 9) <= payLoad.numOfPages ? (iterator + 9) : payLoad.currentPage + (payLoad.numOfPages - payLoad.currentPage)
        if (endingLink < (payLoad.currentPage + 4)) {
            iterator -= (payLoad.currentPage + 5) - payLoad.numOfPages
        }

        res.render('index', { data: payLoad.results, filter, iterator, currentPage: payLoad.currentPage, numOfPages: payLoad.numOfPages, endingLink })
    })

module.exports = router