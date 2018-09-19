const express = require('express')
const router = express.Router()

const queries = require('../db/queries')

router.get('/', (req, res, next) => {
    queries.getAllhigh_official().then(result => {
        res.status(200).json(result)
    })
})

router.get('/:id', (req, res, next) => {
    queries.getSinglehigh_official(req.params.id).then(result => {
        res.status(200).json(result)
    })
})

module.exports = router