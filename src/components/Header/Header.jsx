import React from 'react';
import { useDispatch } from 'react-redux';

import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import Categories from '../Categories/Categories';

import styles from './Header.module.scss';
import { setCategory, setSortValue } from '../../redux/slices/filterSlice';

const Header = () => {
  const dispatch = useDispatch();

  const onChangeCategory = (str) => {
    dispatch(setCategory(str));
  };

  const onChangeSort = (str) => {
    dispatch(setSortValue(str));
  };

  return (
    <header className={styles.header}>
      <h1>Search for books</h1>
      <Search />
      <div className={styles.filter}>
        <Categories onChangeCategory={onChangeCategory}/>
        <Sort onChangeSort={onChangeSort}/>
      </div>
    </header>
  );
};

export default Header;
