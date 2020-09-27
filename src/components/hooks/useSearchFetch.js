import { useState } from 'react'

const useSearchFetch = () => {
  const [searchedData, setSearchedData] = useState([])
  const [searchError, setSearchError] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)

  const fetchSearch = async (endpoint) => {
    setSearchLoading(true)
    try {
      const result = await (await fetch(endpoint)).json()
      setSearchedData([...result.data])
    } catch (error) {
      setSearchError(true)
    }
    setSearchLoading(false)
  }

  return [{ searchedData, searchError, searchLoading }, fetchSearch]
}

export default useSearchFetch
