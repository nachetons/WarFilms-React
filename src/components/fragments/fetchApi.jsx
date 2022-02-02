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
        setData(takeItems(data.results))
        console.log(data)
        setStatus('fetched')
      } else {
        // eslint-disable-next-line no-undef
        const response = await fetch(URL)
        const data = await response.json()
        cache[URL] = data // set response in cache;

        setData(takeItems(data.results))
        setStatus('fetched')
      }
    }

    fetchData()
  }, [URL])

  return { status, data }
};

export function fetchApi2 (URL) {
  const [status2, setStatus2] = useState('idle')
  const [data2, setData2] = useState([])

  useEffect(() => {
    if (!URL) return

    const fetchData2 = async () => {
      setStatus2('fetching')
      if (cache[URL]) {
        const data2 = cache[URL]
        setData2(takeItems(data2.results))
        console.log(data2)
        setStatus2('fetched')
      } else {
        // eslint-disable-next-line no-undef
        const response = await fetch(URL)
        const data2 = await response.json()
        cache[URL] = data2 // set response in cache;
        setData2(takeItems(data2.results))
        setStatus2('fetched')
      }
    }

    fetchData2()
  }, [URL])

  return { status2, data2 }
};

export function fetchApi3 (URL) {
  const [status3, setStatus3] = useState('idle')
  const [data3, setData3] = useState([])

  useEffect(() => {
    if (!URL) return

    const fetchData3 = async () => {
      setStatus3('fetching')
      if (cache[URL]) {
        const data3 = cache[URL]
        setData3(takeItems(data3.results))
        console.log(data3)
        setStatus3('fetched')
      } else {
        // eslint-disable-next-line no-undef
        const response = await fetch(URL)
        const data3 = await response.json()
        cache[URL] = data3 // set response in cache;
        setData3(takeItems(data3.results))
        setStatus3('fetched')
      }
    }

    fetchData3()
  }, [URL])

  return { status3, data3 }
};

function takeItems (list) {
  const xs = []

  if (list.length < 10) {
    return xs
  } else {
    for (let i = 0; i < 10; i++) {
      xs.push(list[i])
    }
    return xs
  }
}
