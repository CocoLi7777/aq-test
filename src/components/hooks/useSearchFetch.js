import { useState } from 'react'

const useSearchFetch = () => {
  const [searchedData, setSearchedData] = useState([])
  const [searchError, setSearchError] = useState(false)

  const fetchSearch = async (endpoint) => {
    try {
      const result = await (await fetch(endpoint)).json()
      setSearchedData([...result.data])
    } catch (error) {
      setSearchError(true)
    }
  }

  return [{ searchedData }, fetchSearch]
}

export default useSearchFetch
