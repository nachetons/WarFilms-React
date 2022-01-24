import { useEffect, useState } from 'react'

const cache = {}

export default function fetchApi (URL) {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState([])

  useEffect(() => {
    if (!URL) return

    const fetchData = async () => {
      setStatus('fetching')
      if (cache[URL]) {
        const data = cache[URL]
        setData(data.results)
        setStatus('fetched')
      } else {
        // eslint-disable-next-line no-undef
        const response = await fetch(URL)
        const data = await response.json()
        cache[URL] = data // set response in cache;
        setData(data.results)
        setStatus('fetched')
      }
    }

    fetchData()
  }, [URL])

  return { status, data }
};
