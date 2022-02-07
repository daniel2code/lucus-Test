import API from "../config/axiosConfig";
import { useState } from "react";

export const useGetRequest = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const makeGetRequest = (url, cb) => {
    setLoading(true);
    API({
      url,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        cb(res.data)
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };

  return {
    loading,
    data,
    makeGetRequest,
  };
};
