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
               Boolean: req.body.Boolean,
            })
            res.status(201).json(insertData)
         } catch (error) {
            res.json(error)
         }
      })
      .get(async function (req, res) {
         const page = req.query.page || 1
         const limit = 3
         const offset = (page - 1) * limit
         const searchParams = {}
         const passParams = {}

         // search

         if (req.query.ID) {
            searchParams['ID'] = parseInt(req.query.ID)
            passParams['ID'] = parseInt(req.query.ID)
         }

         if (req.query.String) {
            searchParams['String'] = new RegExp(`${req.query.String}`, 'i')
            passParams['String'] = req.query.String
         }

         if (req.query.Integer) {
            searchParams['Integer'] = parseInt(req.query.Integer)
            passParams['Integer'] = parseInt(req.query.Integer)
         }

         if (req.query.Float) {
            searchParams['Float'] = parseFloat(req.query.Float)
            passParams['Float'] = parseFloat(req.query.Float)
         }

         if (req.query.Date) {
            searchParams['Date'] = req.query.Date
            passParams['Date'] = req.query.Date
         }

         if (req.query.Boolean) {
            searchParams['Boolean'] = req.query.Boolean
            passParams['Boolean'] = req.query.Boolean
         }

         try {
            const totalData = await collection.countDocuments(searchParams)
            const pageTotal = Math.ceil(totalData / limit)

            const displayAllData = await collection
               .aggregate([
                  {
                     $match: searchParams,
                  },
                  { $skip: offset },
                  { $limit: limit },
               ])
               .toArray()

            res.status(200).json({
               data: displayAllData,
               passParams,
               totalData,
               pageCurrent: parseInt(page),
               pageTotal,
               moment,
            })
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
                     ID: parseInt(req.body.ID),
                     String: req.body.String,
                     Integer: parseInt(req.body.Integer),
                     Float: parseFloat(req.body.Float),
                     Date: req.body.Date,
                     Boolean: req.body.Boolean,
                  },
               }
            )
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
         } catch (error) {
            res.json(error)
         }
      })

   return router
}
