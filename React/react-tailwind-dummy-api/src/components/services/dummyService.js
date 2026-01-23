import api from "./api";

export const getProducts = () => api.get("/products");
export const getUsers = () => api.get("/users");
export const getCarts = () => api.get("/carts");
