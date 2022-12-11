import { useState, useEffect } from "react";
const base_url = "http://103.183.75.217:3000";
const refresh_token_url = "/auth/refreshToken";

const useFetch = (url: string, changes: number, trigger: number | string) => {
  const [data, setData] = useState<Array<any>>([]);
  const [dataCount, setDataCount] = useState(0);
  const [error, setError] = useState<null | string>(null);
  const [refresh, setRefresh] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const tokenExpiredCode = 401;

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    if (trigger) {
      setError(null);
      fetch(`${base_url + url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((res) => {
          // If token expired, hit refresh token api and rerun the function
          if (res.status === tokenExpiredCode) {
            fetch(base_url + refresh_token_url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                refresh_token,
              }),
            })
              .then((res) => res.json())
              .then((result) => {
                // Refresh access token in local storage
                localStorage.setItem(
                  "access_token",
                  `${result.data.access_token}`
                );
                localStorage.setItem(
                  "refresh_token",
                  `${result.data.refresh_token}`
                );
                setRefresh((current) => current + 1);
              });
          }

          if (!res.ok) {
            throw new Error("fetch data failed");
          }

          return res.json();
        })
        .then((result) => {
          setDataCount(result.count);
          setData(result.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [url, changes, refresh, trigger]);

  return { data, error, dataCount, isLoading };
};

export default useFetch;
