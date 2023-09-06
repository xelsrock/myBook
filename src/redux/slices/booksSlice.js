import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
  totalItems: 0,
  status: 'loading',
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setItems(state, action) {
      state.bookItems = action.payload;
    },
    setTotalItems(state, action) {
      state.totalItems = action.payload;
    },
  },
});

export const selectBooksData = (state) => state.booksSlice;

export const { setItems, setTotalItems } = booksSlice.actions;

export default booksSlice.reducer;
