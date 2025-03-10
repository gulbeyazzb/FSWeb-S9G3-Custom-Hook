import axios from "axios";
import { useState } from "react";

export const useAxios = (reqType, endpoint, payload) => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [err, setErr] = useState();

  const doRequest = () => {
    setLoading(true);
    axios[reqType](endpoint, payload)
      .then((res) => setData(res.data))
      .catch((err) => setErr(err))
      .finally(() => setLoading(false));
  };

  return [data, doRequest, loading, err];
};
