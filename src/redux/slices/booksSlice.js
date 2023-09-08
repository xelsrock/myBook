import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_KEY } from '../../API/ApiKey';

const initialState = {
  bookItems: [],
  startIndex: 0,
  totalItems: 0,
  status: 'loading',
};

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooksStatus',
  async ({ searchValue, categories, sortValue, startIndex }) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/?q=intitle:${searchValue}${categories}&orderBy=${sortValue}&maxResults=30&startIndex=${startIndex}&key=${API_KEY}`,
    );

    return data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setStartIndex(state) {
      state.startIndex += 30;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.status = 'loading';
        state.bookItems = [];
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.bookItems = action.payload.items;

        state.totalItems = action.payload.totalItems;

        state.status = 'success';
      })
      .addCase(fetchBooksAsync.rejected, (state) => {
        state.status = 'error';
        state.bookItems = [];
      });
  },
});

export const selectBooksData = (state) => state.booksSlice;

export const { setStartIndex } = booksSlice.actions;

export default booksSlice.reducer;
