import * as http from "../utils/http";

export const register = (userInfo) => {
  http.post("auth/register", { body: userInfo });
};

export const login = (userInfo) => {
  http.post("auth/login", { body: userInfo }).then((response) => {
    localStorage.setItem("authorization", response.token);
    localStorage.setItem("userId", response.userId);
  });
};

export const getAccessToken = () => {
  const token = localStorage.getItem("authorization");
  return token;
};
