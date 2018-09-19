const express = require('express')
const router = express.Router()

const queries = require('../db/queries')

router.get('/', (req, res, next) => {
   queries.getAllBerita().then(result => {
       res.status(200).json(result)
   })
})



module.exports = router