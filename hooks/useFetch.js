import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = async (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_API_URL +
            `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
            },
          }
        );
        setData(res?.data.data);
        console.log(res?.data.data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(import.meta.env.VITE_API_TOKEN);

    fetchData();
  }, []);
};
