const express = require('express')
const router = express.Router()
const { getLocal, getFeed, getSearch } = require('./../controllers/data')

router.get('/api/here', getLocal)

router.get('/api/feed/:city', getFeed)

router.get('/api/search/:city', getSearch)

router.get('/ping', (req, res) => {
  res.send('pong')
})
router.use('/', express.static('client'))

module.exports = router
