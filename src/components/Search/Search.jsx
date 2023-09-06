import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './Search.module.scss';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');

  const setInputClick = () => {
   dispatch(setSearchValue(value))
  };

  const setInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input onChange={setInputChange} value={value} className={styles.input} type="text" placeholder="Book title..." />
      <svg
        onClick={setInputClick}
        className={styles.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512">
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
    </div>
  );
};

export default Search;
