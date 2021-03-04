import * as http from "../utils/http";

export const postList = () => {
  const userId = localStorage.getItem("userId");
  return http
    .get(`posts/${userId}`, { accessToken: true })
    .then(response => response.data);
};

export const singlePost = (post) => {
  const userId = localStorage.getItem("userId");
  http
    .get(`posts/${userId}`, { params: { id: post.id }, accessToken: true })
    .then((response) => console.log(response));
};

export const createPost = (postInfo) => {
  const userId = localStorage.getItem("userId");
  http
    .post(`posts/${userId}`, { accessToken: true, body: postInfo })
    .then((response) => console.log(response));
};

export const deletePost = (post) => {
  const userId = localStorage.getItem("userId");
  http
    .remove(`posts/${userId}`, { params: { id: post.id }, accessToken: true })
    .then((response) => console.log(response));
};
