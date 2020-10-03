const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/api/here', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const endpoint = process.env.LOCAL_URL
  axios({
    method: 'GET',
    url: endpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => {
      res.status(200).json(response.data)
    })
    .catch((error) => {
      res.status(400).json({ success: false })
    })
})

router.get('/api/feed/:city', (req, res) => {
  const value = req.params.city

  res.setHeader('Content-Type', 'application/json')
  const endpoint = `${process.env.FEED_URL}${value}${process.env.FEED_KEY}`

  axios({
    method: 'GET',
    url: endpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => {
      res.status(200).json(response.data)
    })
    .catch((error) => {
      res.status(400).json({ success: false })
    })
})
router.get('/api/search/:city', (req, res) => {
  const value = req.params.city || 'melbourne'
  res.setHeader('Content-Type', 'application/json')
  const endpoint = `${process.env.SEARCH_URL}${value}${process.env.API_KEY}`
  axios({
    method: 'GET',
    url: endpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => {
      res.status(200).json(response.data)
    })
    .catch((error) => {
      res.status(400).json({ success: false })
    })
})
router.get('/ping', (req, res) => {
  res.send('pong')
})
router.use('/', express.static('client'))

module.exports = router
