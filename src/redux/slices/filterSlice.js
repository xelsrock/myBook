import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  category: 'all',
  sortValue: 'relevance',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSortValue(state, action) {
      state.sortValue = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filterSlice;

export const { setSearchValue, setCategory, setSortValue } = filterSlice.actions;

export default filterSlice.reducer;
