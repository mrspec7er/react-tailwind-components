const base_url = import.meta.env.VITE_BASE_URL;

const uploadFile = async (url: string, body: FormData) => {
  const access_token = localStorage.getItem("accessToken");
  const tokenExpiredCode = 406;

  return await fetch(`${base_url + url}`, {
    method: "POST",
    headers: {
      "x-access-token": access_token!,
    },
    body,
  }).then((res) => {
    // If token expired, hit refresh token api and rerun the function

    if (res.status === tokenExpiredCode) {
      return (window.location.href = "/login");
    }
    if (!res.ok) {
      throw new Error("Request Failed");
    }

    return res.json();
  });
};

export default uploadFile;
