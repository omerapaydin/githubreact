import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));

    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setData(data);
    };
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
  };
};

export default useFetch;
