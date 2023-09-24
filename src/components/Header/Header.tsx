import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import Categories from '../Categories/Categories';

import styles from './Header.module.scss';
import { setCategory, setSortValue } from '../../redux/slices/filterSlice';
import { resetStartIndex, resetBookItems } from '../../redux/slices/booksSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();;

  const onChangeCategory = (value: string) => {
    dispatch(setCategory(value));
    dispatch(resetStartIndex());
    dispatch(resetBookItems());
  };

  const onChangeSort = (value: string) => {
    dispatch(setSortValue(value));
    dispatch(resetBookItems())
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Search for books</h1>
      <Search />
      <div className={styles.filter}>
        <Categories onChangeCategory={onChangeCategory} />
        <Sort onChangeSort={onChangeSort} />
      </div>
    </header>
  );
};

export default Header;
