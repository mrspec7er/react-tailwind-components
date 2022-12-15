import { useState, useEffect } from "react";
const base_url = "https://api.instantwebtools.net";
const refresh_token_url = "/auth/refreshToken";

const useFetch = (url: string, changes: number) => {
  const [data, setData] = useState<{ dataCount: number; data: Array<any> }>({
    dataCount: 0,
    data: [],
  });
  const [error, setError] = useState<null | string>(null);
  const [refresh, setRefresh] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const tokenExpiredCode = 401;

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");

    setError(null);

    const controller = new AbortController();

    fetch(`${base_url + url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      signal: controller.signal,
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
        setData({ dataCount: result.totalPassengers, data: result.data });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    // Abort fetch request when component unmount
    return () => {
      controller.abort();
    };
  }, [url, changes, refresh]);

  return { data, error, isLoading };
};

export default useFetch;
