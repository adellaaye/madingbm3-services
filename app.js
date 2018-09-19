/**
 * express framework basic setup
 * for microservice REST API
 */

const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

/**
 * import express
 * import index routes
 * import /api/v1/users routes
 */

const app = express()
const berita = require('./routes/berita')
const high_official = require('./routes/high_official')

/**
 * standard usage
 */

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1/berita', berita)
app.use('/api/v1/high_official', high_official)

/**
 * catch 404 and forward to error handler
 */

app.use(function(req, res, next) {
  next(createError(404))
})

/**
 * error handler
 */

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    status: 500,
    error: req.app.get('env') === 'development' ? err : {}
  })
})

module.exports = app