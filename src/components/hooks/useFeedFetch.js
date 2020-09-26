import { useState } from 'react'

const useFeedFetch = () => {
  const [feed, setFeed] = useState({})
  const [feedError, setFeedError] = useState('')

  const feedFetch = async (endpoint) => {
    try {
      const result = await (await fetch(endpoint)).json()
      setFeed({
        name: result.data.city.name,
        aqi: result.data.aqi,
        url: result.data.city.url,
        time: result.data.time.s,
        forecast: result.data.forecast.daily.pm25,
      })
    } catch (error) {
      setFeedError(error)
    }
  }
  return [{ feed, feedError }, feedFetch]
}

export default useFeedFetch
