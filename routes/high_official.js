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

router.delete('/:id', (req, res, next) => {
    queries.deletehigh_official(req.params.id).then(result => {
        res.status(200).json(result)
    })
})

router.post('/', (req, res, next) => {
    queries.posthigh_official(req.body).then(result => {
        res.status(200).json(result)
    })
})

router.put('/:id', (req, res, next) => {
    queries.updatehigh_official(req.params.id, req.body).then(result => {
        res.status(200).json(result)
    })
})




module.exports = router