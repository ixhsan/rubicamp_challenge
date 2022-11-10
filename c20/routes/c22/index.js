const express = require('express')
const router = express.Router()

module.exports = function () {
    router
        .route('/')
        .get(async function (req, res) {
            const filter = req.query
            const title = `Challenge 22 - BREAD EXPRESS`
            try {
                res.render('./c22/index', { filter, title })
            } catch (error) {
                res.json(error)
            }
        })

    // .get(async function (req, res, next) {
    //     const filter = req.query
    //     const page = req.query.page || 1
    //     const limit = 3
    //     const offset = (page - 1) * limit

    //     try {
    //         const showData = await collection.find({})
    //             .skip(offset)
    //             .limit(limit)
    //             .toArray()

    //         const totalData = await collection.count()
    //         const pageTotal = Math.ceil(totalData / limit)
    //         // TEST POSTMAN
    //         // res.status(200).json({
    //         //     data: showData,
    //         //     filter,
    //         //     moment,
    //         //     page,
    //         //     pageTotal
    //         // })
    //         res.status(200).render('./c22/index', {
    //             data: showData,
    //             filter,
    //             moment,
    //             page,
    //             pageTotal
    //         })
    //     } catch (error) {
    //         res.json(error)
    //     }
    // })
    // .post(async function (req, res) {
    //     try {
    //         const insertData = await collection.insertOne({
    //             "ID": req.body.id,
    //             "String": req.body.string,
    //             "Integer": req.body.integer,
    //             "Float": req.body.float,
    //             "Date": req.body.date,
    //             "Boolean": req.body.boolean
    //         })

    //         res.status(201).json(insertData)
    //     } catch (error) {
    //         res.json(error)
    //     }
    // })



    // router.delete('/:id', async function (req, res) {
    //     try {
    //         const deleteData = await collection.deleteOne(
    //             { _id: ObjectId(req.params.id) }
    //         )
    //         res.status(201).json(deleteData)
    //     } catch (error) {
    //         res.json(error)
    //     }
    // })

    return router
}