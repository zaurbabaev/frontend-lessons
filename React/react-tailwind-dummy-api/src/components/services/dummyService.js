import api from "./api";

export const getProducts = async () => {
  return await api.get("/products");
};

export const getUsers = async () => {
  return await api.get("/users");
};

export const getCarts = async () => {
  return await api.get("/carts");
};

