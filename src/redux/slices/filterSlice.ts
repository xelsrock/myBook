import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterSliceState {
  searchValue: string,
  category: string,
  sortValue: string,
}

const initialState: FilterSliceState = {
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

export const selectFilter = (state: RootState) => state.filterSlice;

export const { setSearchValue, setCategory, setSortValue } = filterSlice.actions;

export default filterSlice.reducer;
