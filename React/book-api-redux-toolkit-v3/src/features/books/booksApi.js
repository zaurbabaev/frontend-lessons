import api from "@/api/axios";

export const getBooks = (rating) =>
  api.get(`/books`, { params: rating ? { rating } : {} });

export const getBookById = (id) => api.get(`/books/${id}`);

export const createBook = (book) => api.post(`/books`, book);

export const updateBook = (id, book) => api.put(`/books/${id}`, book);

export const deleteBook = (id) => api.delete(`/books/${id}`, id);

export const createReview = (id, review) =>
  api.post(`/books/${id}/reviews`, review);
