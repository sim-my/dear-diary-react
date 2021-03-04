import * as http from "../utils/http";

export const register = (userInfo) => {
  http.post("auth/register", { body: userInfo });
};

export const login = (userInfo, callback) => {
 http.post("auth/login", { body: userInfo }).then((response) => {
    if (response.token) {
      localStorage.setItem("authorization", response.token);
      localStorage.setItem("userId", response.userId);
      callback();
    } 
  });
};

export const getAccessToken = () => {
  const token = localStorage.getItem("authorization");
  return token;
};
