import axios from "axios";
import * as auth from "../service/auth";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  responseType: "json",
});

export const get = (
  url,
  { params = {}, accessToken = false, responseType = "json", headers = {} } = {}
) => {
  const authHeaders = {};
  if (accessToken) {
    authHeaders.Authorization = auth.getAccessToken();
  }
  return instance({
    url,
    params,
    responseType,
    method: "GET",
    headers: { ...authHeaders, ...headers },
  })
    .then((response) => response.data)
    .catch((err) => err);
};

export const post = (
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};
  if (accessToken) {
    authHeaders.Authorization = auth.getAccessToken();
  }
  return instance({
    url,
    params,
    data: body,
    method: "POST",
    headers: { ...authHeaders, ...headers },
  }).then((response) => {
    return response.data;
  });
};

export const put = (
  url,
  { params = {}, body = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};
  if (accessToken) {
    authHeaders.Authorization = auth.getAccessToken();
  }
  return instance({
    url,
    params,
    data: body,
    method: "PUT",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response.data);
};

export const remove = (
  url,
  { params = {}, accessToken = false, headers = {} } = {}
) => {
  const authHeaders = {};
  if (accessToken) {
    authHeaders.Authorization = auth.getAccessToken();
  }
  return instance({
    url,
    params,
    method: "DELETE",
    headers: { ...authHeaders, ...headers },
  }).then((response) => response.data);
};
