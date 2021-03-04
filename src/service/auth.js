import * as http from "../utils/http";

export const register = (userInfo) => {
  return http
    .post("auth/register", { body: userInfo })
    .then((response) => response);
};

export const login = (userInfo) => {
  return http.post("auth/login", { body: userInfo }).then((response) => {
    if (response.token) {
      localStorage.setItem("authorization", response.token);
      localStorage.setItem("userId", response.userId);
      localStorage.setItem(
        "name",
        response.first_name + " " + response.last_name
      );

      return response;
    }
  });
};

export const getAccessToken = () => {
  const token = localStorage.getItem("authorization");
  return token;
};
