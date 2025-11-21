import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Mycomponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      fetch('api/item')
        .then((data) => data.json)
        .then((result) => setData(result))
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);
  if (loading) return <p>loading.....</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <div>Data: {JSON.stringify(data)}</div>;
};

export default Mycomponent;
