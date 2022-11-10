const express = require('express')
const router = express.Router()
const moment = require('moment')
const { ObjectId } = require('mongodb')

module.exports = function (db) {
    const collection = db.collection('data_type')

    router
    .route('/')
    .post(async function (req, res) {
        try {
            const insertData = await collection.insertOne({
                ID: req.body.ID,
                String: req.body.String,
                Integer: req.body.Integer,
                Float: req.body.Float,
                Date: req.body.Date,
                Boolean: req.body.Boolean
            })
            res.status(201).json(insertData)
        } catch (error) {
            res.json(error)
        }
    })

    router
    .route('/all')
    .get(async function (req, res) {
        try {
            // const filter = req.query
            // const page = req.query.page || 1
            // const limit = 3
            // const offset = 29
            // const offset = (page - 1) * limit

            const displayAllData = await collection
                .find({})
                // .skip(offset)
                // .limit(limit)
                .toArray()

            // const totalData = await collection.count()
            // const pageTotal = Math.ceil(totalData / limit)
            // console.log('masuk');
            res.status(200).json(
              // {
                displayAllData,
                // filter,
                // page,
                // pageTotal,
                // moment
            // }
            )
        } catch (error) {
            res.json(error)
        }
    })

    router
        .route('/:id')
        .get(async function (req, res) {
            try {
                const selectData = await collection.findOne({
                    _id: ObjectId(req.params.id.toString()),
                })
                res.status(200).json(selectData)
                // res.status(200).render('./c22/edit', {
                    // data: selectData,
                // })
            } catch (error) {
                res.json(error)
            }
        })
        .put(async function (req, res) {
            try {
                const updateData = await collection.updateOne(
                    { _id: ObjectId(req.params.id.toString()) },
                    {
                        $set: {
                            ID: req.body.ID,
                            String: req.body.String,
                            Integer: req.body.Integer,
                            Float: req.body.Float,
                            Date: req.body.Date,
                            Boolean: req.body.Boolean,
                        },
                    }
                )
                // res.redirect('/' + updateData)
                res.status(201).json(updateData)
            } catch (error) {
                res.json(error)
            }
        })
        .delete(async function (req, res) {
            try {
                const deleteData = await collection.deleteOne({
                    _id: ObjectId(req.params.id.toString()),
                })

                // TEST POSTMAN
                res.status(200).json(deleteData)
                // res.status(200).redirect('/')
            } catch (error) {
                res.json(error)
            }
        })

    // router
    //   .route('/test')
    //   .get(async function (req, res) {
    //     try {
    //       const testData = { test: 'haha' }
    //       res.json(testData)
    //     } catch (error) {
    //       res.json(error)
    //     }
    //   })

    return router
}
