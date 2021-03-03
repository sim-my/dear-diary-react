import * as http from "../utils/http";

export const postList = () => {
  const userId = localStorage.getItem("userId");
  http
    .get(`posts/${userId}`, { accessToken: true })
    .then((response) => console.log(response));
};
