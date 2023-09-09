import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_KEY } from '../../API/ApiKey';
import { CardBookProps } from '../../components/CardBook/CardBook';
import { RootState } from '../store';

interface BookSliceState {
  bookItems: CardBookProps[],
  startIndex: number,
  totalItems: number,
  status: Status,
}

type SearchBookParams = {
  searchValue: string,
  categories: string,
  sortValue: string,
  startIndex: number,
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: BookSliceState = {
  bookItems: [],
  startIndex: 0,
  totalItems: 0,
  status: Status.LOADING,
};

export const fetchBooksAsync = createAsyncThunk<CardBookProps[], SearchBookParams>(
  'books/fetchBooksStatus',
  async ({ searchValue, categories, sortValue, startIndex }) => {
    const { data } = await axios.get<CardBookProps[]>(
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
        state.status = Status.LOADING;
        state.bookItems = [];
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action: any) => {
        state.bookItems = action.payload.items;        

        state.totalItems = action.payload.totalItems;

        state.status = Status.SUCCESS;
      })
      .addCase(fetchBooksAsync.rejected, (state) => {
        alert('Произошла ошибка при получении данных с сервера :(');
        state.status = Status.ERROR;
        state.bookItems = [];
      });
  },
});

export const selectBooksData = (state: RootState) => state.booksSlice;

export const { setStartIndex } = booksSlice.actions;

export default booksSlice.reducer;
