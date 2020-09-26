import { useState } from 'react'

const useLocalFetch = () => {
  const [local, setLocal] = useState({})
  const [localLoading, setLocalLoading] = useState(true)
  const [localError, setLocalError] = useState(false)

  const localFetch = async (endpoint) => {
    setLocalLoading(true)
    setLocalError(false)
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

  return [{ local, localLoading, localError }, localFetch]
}

export default useLocalFetch
