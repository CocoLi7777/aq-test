import { useState } from 'react'

const useFeedFetch = () => {
  const [feed, setFeed] = useState({})
  const [feedError, setFeedError] = useState(false)
  const [feedLoading, setFeedLoading] = useState(false)

  const feedFetch = async (endpoint) => {
    setFeedLoading(true)
    try {
      const result = await (await fetch(endpoint)).json()
      if (result.status === 'error') {
        setFeedError(true)
      }
      setFeed({
        name: result.data.city.name,
        aqi: result.data.aqi,
        url: result.data.city.url,
        time: result.data.time.s,
        forecast: result.data.forecast.daily.pm25,
      })
    } catch (error) {
      setFeedError(true)
    }
    setFeedLoading(false)
  }
  return [{ feed, feedError, feedLoading }, feedFetch]
}

export default useFeedFetch
