import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers, getUsersById } from "@/features/users/usersApi";
import { act } from "react";

/* Get all users */
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const result = await getUsers();
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

/* Get single user */
export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id, { rejectWithValue }) => {
    try {
      const result = await getUsersById(id);
      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    selectedUser: null,
    loading: false,
    loadingUser: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = act.payload || "XƏta baş verdi";
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loadingUser = true;
        state.seletecUser = null;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loadingUser = false;
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loadingUser = false;
        state.error = action.payload || "Xəta baş verdi";
      });
  },
});

export default usersSlice.reducer;
