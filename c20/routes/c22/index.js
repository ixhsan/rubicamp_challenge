const express = require('express')
const router = express.Router()

module.exports = function () {
   router.route('/').get(async function (req, res) {
      try {
         res.render('./c22/index')
      } catch (error) {
         res.json(error)
      }
   })

   return router
}
