import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [coinData, setDataCoin] = useState([]);

  try {
    useEffect(() => {
      const fetchCoinsDetails = async (url) => {
        const { data } = await axios.get(url);
        setDataCoin(data);
        setLoading(false);
      };
      fetchCoinsDetails(url);
      // console.log(coinData);
      setLoading(true);
    }, []);
  } catch (error) {
    setLoading(true);
  }

  return { coinData, loading };
};

export default useFetch;
