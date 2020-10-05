const axios = require('axios')

exports.getLocal = async (req, res) => {
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
      //console.log(response.data)
    })
    .catch((error) => {
      res.status(400).json({ success: false })
    })
}

exports.getFeed = async (req, res) => {
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
}

exports.getSearch = async (req, res) => {
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
      console.log(response.data)
    })
    .catch((error) => {
      res.status(400).json({ success: false })
    })
}
