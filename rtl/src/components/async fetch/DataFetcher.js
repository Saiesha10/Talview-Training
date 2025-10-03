// src/components/DataFetcher.js
import { useEffect, useState } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData('Fetched data');
    }, 500);
  }, []);

  if (!data) return <p>Loading...</p>;
  return <p>{data}</p>;
}
