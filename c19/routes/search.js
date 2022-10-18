const express = require('express')
const router = express.Router()
const fs = require('fs')
let data = require('./data')

router
    .route('/')
    .get((req, res) => {
        const filter = req.query
        const page = req.query.page ? Number(req.query.page) : 1
        let dataFiltered = []

        let dataQuery = {
            "ID": filter.id,
            "String": filter.string,
            "Integer": filter.integer,
            "Float": filter.float,
            "Date": filter.date,
            "Boolean": filter.boolean
        }

        for (let key in dataQuery) {
            if (!dataQuery[key]) {
                delete dataQuery[key]
            }
        }

        if (Object.entries(dataQuery).length > 0) {
            let count = 0
            let log = 1
            dataFiltered = data.filter(user => {
                console.log(`==== Data ke ${log} ====`);
                for (let key in dataQuery) {
                    let resultIs = new RegExp(dataQuery[key], "gi")
                    if (resultIs.test(user[key])) {
                        count++
                    }
                    // console.log({
                    //     subData: key,
                    //     dataYgDicari: dataQuery[key],
                    //     nilaiData: user[key],
                    //     statCount: count
                    // });
                }
                if (count === Object.keys(dataQuery).length) {
                    count = 0
                    return user
                }
                count = 0
                log++
            })
        }

        // console.log({ hasilFilter: dataFiltered });

        // if (Object.entries(dataQuery).length === 0 || !dataFiltered.length) {
        //     dataFiltered.push({})
        // }

        // /* Code-Base Pagination */

        if (dataFiltered.length > 3) {
            
        }

        const limit = 3

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const payLoad = {}

        if (endIndex < dataFiltered.length) {
            payLoad.next = {
                page: page + 1
            }
        }

        if (startIndex > 0) {
            payLoad.previous = {
                page: page - 1
            }
        }

        payLoad.numOfResults = dataFiltered.length
        payLoad.startIndex = startIndex
        payLoad.endIndex = endIndex

        payLoad.numOfPages = Math.ceil(dataFiltered.length / limit)
        payLoad.currentPage = page

        // // console.log(payLoad);

        // /* Front-End Pagination */

        // if (payLoad.currentPage > payLoad.numOfPages) {
        //     res.redirect('/?page=' + encodeURIComponent(payLoad.numOfPages))
        // } else if (payLoad.currentPage < 1) {
        //     res.redirect('/?page=' + encodeURIComponent('1'))
        // }

        // payLoad.results = dataFiltered.slice(startIndex, endIndex)

        // // console.log(payLoad.results);
        // // console.log({checkModuleChildren: module.children});

        // let iterator = (payLoad.currentPage - 5) < 1 ? 1 : payLoad.currentPage - 5
        // let endingLink = (iterator + 9) <= payLoad.numOfPages ? (iterator + 9) : payLoad.currentPage + (payLoad.numOfPages - payLoad.currentPage)
        // if (endingLink < (payLoad.currentPage + 4)) {
        //     iterator -= (payLoad.currentPage + 5) - payLoad.numOfPages
        // }

        res.render('search', { 
            // data: payLoad.results, 
            data: dataFiltered, 
            filter
            // iterator, 
            // currentPage: payLoad.currentPage, 
            // numOfPages: payLoad.numOfPages, 
            // endingLink 
        })
    })

module.exports = router