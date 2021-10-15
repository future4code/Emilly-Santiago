import { useState, useEffect } from "react";
import axios from "axios";

export const useGetTrips = () => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    getTrips();
  }, [trips]);


  const getTrips = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/emilly-santiago-cruz/trips",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setTrips(response.data.trips);
        setIsLoading(false); // desativo a flag de loading em caso de sucesso
        //console.log(response.data.trips)
      })
      .catch((error) => {
        console.log(error.response);
        setError(error);
        setIsLoading(false); // desativo a flag de loading em caso de falha
      });
  };

  return [trips, isLoading, error];
};
