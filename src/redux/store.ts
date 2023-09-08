import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import booksSlice from "./slices/booksSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    booksSlice,
    filterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();