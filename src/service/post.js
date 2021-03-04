import * as http from "../utils/http";

export const postList = () => {
  const userId = localStorage.getItem("userId");
  return http
    .get(`posts/${userId}`, { accessToken: true })
    .then(response => response.data);
};

export const singlePost = (id) => {
  const userId = localStorage.getItem("userId");
  return http
    .get(`posts/${userId}/${id}`, { accessToken: true })
    .then((response) => response.data);
};

export const createPost = (postInfo) => {
  const userId = localStorage.getItem("userId");
  http
    .post(`posts/${userId}`, { accessToken: true, body: postInfo })
    .then((response) => console.log(response));
};

export const updatePost = (postInfo, id) => {
  const userId = localStorage.getItem("userId");
  http
    .put(`posts/${userId}/${id}`, { accessToken: true, body: postInfo })
    .then((response) => console.log(response));
};

export const deletePost = (id) => {
  const userId = localStorage.getItem("userId");
  http
    .remove(`posts/${userId}/${id}`, {accessToken: true })
    .then((response) => console.log(response));
};
