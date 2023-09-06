import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  sort: {
    relevance: 'relevance',
    newest: 'newest',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filterSlice;

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
