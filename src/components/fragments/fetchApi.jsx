import { URL_IMG } from '@/diccionario/url';
import { useEffect, useState } from 'react';


export default function fetchApi(URL) {

  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
      if (!URL) return;
      const fetchData = async () => {
          setStatus('fetching');
          const response = await fetch(URL);
          const data = await response.json();
          setData(data.results);
          setStatus('fetched');
      };

      fetchData();
  }, [URL]);

  return { status, data };
};