import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState([]);

  const [isPending , setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
     fetch(url)
     .then(res => {
       if (!res.ok) {
         throw new Error('Failed to fetch data');
       }
      return res.json();
     })
     .then(data => {
       setData(data)
       setIsPending(false);
     })
     .catch(err => {
       console.error('Fetch error:', err);
       setIsPending(false); 
     });
    }, 1000);
    }, [url]);

    return {data , isPending }
};

export default useFetch;