import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    getData();
  }, [url]);

  const getData = () => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("an error has occurred, try again");
        setError(error);
        setIsLoading(false);
      });
  };
  return [data, isLoading, error, getData];
};

export default useRequestData;
