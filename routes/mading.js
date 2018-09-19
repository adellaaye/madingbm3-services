const express = require('express')
const router = express.Router()

const queries = require('../db/queries')

router.get('/', (req, res, next) => {
   queries.getAllMading().then(result => {
       res.status(200).json(result)
   })
})
router.get('/:id', (req, res, next) => {
    queries.getSingleMading(req.params.id).then(result => {
        res.status(200).json(result)
   })
})
router.delete('/:id', (req, res, next) => {
    queries.deleteMading(req.params.id).then(result => {
        res.status(200).json(result)
   })
})
router.post('/', (req, res, next) => {
    queries.postMading(req.body).then(result => {
        res.status(200).json(result)
   })
})
router.put('/:id', (req, res, next) => {
    queries.updateMading(req.params.id, req.body).then(result => {
        res.status(200).json(result)
   })
})

module.exports = router