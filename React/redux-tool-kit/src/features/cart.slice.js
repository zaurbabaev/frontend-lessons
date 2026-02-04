import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartList",
  initialState: {
    list: [],
  },
  reducers: {
    addToCartAction: function (state, action) {
      const exists = state.list.find((pro) => pro.id === action.payload.id);
      if (!exists) {
        state.list.push({ ...action.payload, count: 1 });
      } else {
        exists.count++;
      }
    },
    removeFromListAction: function (state, action) {
      state.list = state.list.filter((pro) => pro.id !== action.payload);
    },
    clearListAction: function (state) {
      state.list = [];
    },
  },
});

export const { addToCartAction, removeFromListAction, clearListAction } =
  cartSlice.actions;

export default cartSlice.reducer;
