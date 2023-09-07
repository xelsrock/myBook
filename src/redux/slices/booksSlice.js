import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_KEY } from '../../API/ApiKey';

const initialState = {
  bookItems: [],
  totalItems: 0,
  status: 'loading',
};

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooksStatus',
  async ({ searchValue, categories, sortValue }) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/?q=intitle:${searchValue}${categories}&orderBy=${sortValue}&maxResults=30&key=${API_KEY}`,
    );
    return data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setItems(state, action) {
      state.bookItems = action.payload.items;
    },
    setTotalItems(state, action) {
      state.totalItems = action.payload;
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
        state.status = 'success';
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBooksAsync.rejected, (state) => {
        state.status = 'error';
        state.bookItems = [];
      });
  },
});

export const selectBooksData = (state) => state.booksSlice;

export const { setItems, setTotalItems } = booksSlice.actions;

export default booksSlice.reducer;
