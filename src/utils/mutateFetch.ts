const base_url = "http://103.183.75.217:3000";
const refresh_token_url = "/auth/refreshToken";

const mutateFetch = async (
  url: string,
  body: Object,
  method: "POST" | "PUT" | "DELETE"
) => {
  const access_token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh_token");
  const tokenExpiredCode = 401;

  const data = await fetch(`${base_url + url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({ ...body }),
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
    mutateFetch(url, body, method);
  } else {
    return data;
  }
};

export default mutateFetch;
