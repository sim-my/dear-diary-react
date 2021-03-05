export const login = "/login";

export const register = "/register";

export const posts = "/posts";

export const singlePost = "/posts/:id";
export const buildSinglePost = (id) => `/posts/${id}`;

export const createPost = "/posts/create";

export const editPost = "/posts/edit/:id";
export const buildEditPost = (id) => `/posts/edit/${id}`;

export const dashboard = "/";

export const notFound = "/404";
