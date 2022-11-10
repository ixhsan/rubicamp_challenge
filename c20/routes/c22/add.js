const express = require('express')
const router = express.Router()

module.exports = function (db) {
    const collection = db.collection('data_type')

    router
        .route('/')
        .get(async function (req, res) {
            const title = `C22 - Add Data`
            res.status(200).render('./c22/add', { title })
        })
        .post(async function (req, res) {
            try {
                const insertData = await collection.insertOne({
                    ID: req.body.id,
                    String: req.body.string,
                    Integer: req.body.integer,
                    Float: req.body.string,
                    Date: req.body.date,
                    Boolean: req.body.boolean,
                })
                res.status(201).json(insertData)
            } catch (error) {
                res.json(error)
            }
        })

    return router
}
