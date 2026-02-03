import api from "@/api";

export const getUsers = () => api.get(`/users`);

export const getUsersById = (id) => api.get(`/users/${id}`);
