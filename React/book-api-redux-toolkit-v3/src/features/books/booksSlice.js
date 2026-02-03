import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBook, createReview, getBookById, getBooks } from "./booksApi";
import toast from "react-hot-toast";

/* Get all */
export const fetchBooks = createAsyncThunk(
  `books/fetchbooks`,
  async (rating, { rejectWithValue }) => {
    try {
      const result = await getBooks(rating);
      return result.data.books;
    } catch (error) {
      toast.error(error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

/* Fetch single book */
export const fetchBookById = createAsyncThunk(
  "books/fetchBookById",
  async (id, { rejectWithValue }) => {
    try {
      const result = await getBookById(id);
      return result.data;
    } catch (error) {
      toast.error(error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

/* Add new book */
export const addBook = createAsyncThunk(
  "books/addBook",
  async (book, { rejectWithValue }) => {
    try {
      const result = await createBook(book);
      toast.success("Kitab uğurla əlavə edildi!");
      return result.data;
    } catch (error) {
      toast.error(error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const addRewiew = createAsyncThunk(
  "books/addReview",
  async ({ id, review }, { rejectWithValue }) => {
    try {
      const result = await createReview(id, review);
      toast.success("Rəy əlavə edildi!");
      return result.data;
    } catch (error) {
      toast.error(error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

const booksSlice = createSlice({
  name: "books",
  initialState: { list: [], selected: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(fetchBooks.fulfilled, (s, a) => {
        s.loading = false;
        s.list = a.payload || [];
      })
      .addCase(fetchBooks.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })
      .addCase(fetchBookById.fulfilled, (s, a) => {
        s.selected = a.payload;
      })
      .addCase(addBook.fulfilled, (s, a) => {
        s.list.unshift(a.payload);
      });
  },
});

export default booksSlice.reducer;
