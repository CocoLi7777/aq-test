import { useState } from 'react'

const useLocalFetch = () => {
  const [local, setLocal] = useState({})
  const [localLoading, setLocalLoading] = useState(false)
  const [localError, setLocalError] = useState(false)

  const localFetch = async (endpoint) => {
    setLocalError(false)
    setLocalLoading(true)
    try {
      const result = await (await fetch(endpoint)).json()
      setLocal({
        name: result.data.city.name,
        time: result.data.time.s,
        geo: result.data.city.geo,
        aqi: result.data.aqi,
        url: result.data.city.url,
      })
    } catch (error) {
      setLocalError(true)
    }
    setLocalLoading(false)
  }

  return [{ local, localError, localLoading }, localFetch]
}

export default useLocalFetch
