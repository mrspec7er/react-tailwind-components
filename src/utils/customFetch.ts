const base_url = "http://localhost:8000";
const refresh_token_url = "/auth/refreshToken";

const customFetch = async (url: string) => {
  const access_token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh_token");
  const tokenExpiredCode = 401;

  const data = await fetch(`${base_url + url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((res) => {
      // If token expired, hit refresh token api and rerun the function
      if (res.status === tokenExpiredCode) {
        const status = fetch(base_url + refresh_token_url, {
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
            localStorage.setItem("access_token", `${result.data.access_token}`);
            localStorage.setItem(
              "refresh_token",
              `${result.data.refresh_token}`
            );
          })
          .then(() => {
            return tokenExpiredCode;
          });

        return status;
      } else {
        return res.json();
      }
    })
    .then((result) => {
      return result;
    });

  if (data === tokenExpiredCode) {
    customFetch(url);
  } else {
    return data;
  }
};

export default customFetch;
