import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://front-dev-lab.github.io/space-tourism-data/${endpoint}.json`);

        if (!res.ok) {
          throw new Error('Something went wrong');
        }

        const json = await res.json();
        setData(json);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading };
};
