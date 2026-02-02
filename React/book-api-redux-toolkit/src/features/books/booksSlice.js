import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBook, createReview, getBookById, getBooks } from "./booksApi";

/* Get all books ("rating filter") */
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (rating, { rejectWithValue }) => {
    try {
      const res = await getBooks(rating);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  },
);

/* Get single book */
export const fetchBookById = createAsyncThunk(
  "books/fetchBookById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await getBookById(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  },
);

/* Create book */
export const addBook = createAsyncThunk(
  "books/addBook",
  async (book, { rejectWithValue }) => {
    try {
      const res = await createBook(book);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  },
);

/* Add review */
export const addReview = createAsyncThunk(
  "books/addReview",
  async ({ id, review }, { rejectWithValue }) => {
    try {
      const res = await createReview(id, review);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  },
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    list: [],
    selected: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* Fetch books */
      .addCase(fetchBooks.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(fetchBooks.fulfilled, (s, a) => {
        s.loading = false;
        s.list = Array.isArray(a.payload) ? a.payload : a.payload.books || [];
      })
      .addCase(fetchBooks.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload || a.error.message;
      })

      /* Create book */
      .addCase(addBook.fulfilled, (s, a) => {
        s.list.unshift(a.payload);
      })
      /* Single book */
      .addCase(fetchBookById.fulfilled, (s, a) => {
        s.selected = a.payload;
      });
  },
});

export default bookSlice.reducer;
