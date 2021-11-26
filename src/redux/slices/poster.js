import { createSlice } from "@reduxjs/toolkit";

export const posterSlice = createSlice({
  name: "poster",
  initialState: {
    id: "001",
    sizes: ["small", "large", "xl", "xxl"],
    price: 10,
    note: "Hamilton, ON Pier 8 Poster June 22, 2019",
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0549/2034/7823/products/the-national-hamilton-on-pier-8-poster_4dd452d6-323a-420d-8cef-c0f21c5df80c_5000x.png?v=1635448244",
  },
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setNote: (state, action) => {
      state.note = action.payload;
    },
  },
});

export const { setPrice, setNote } = posterSlice.actions;

export default posterSlice.reducer;
