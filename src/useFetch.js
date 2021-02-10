import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
