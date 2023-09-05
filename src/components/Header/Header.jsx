import React from 'react';

import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import Categories from '../Categories/Categories';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Search for books</h1>
      <Search />
      <div className={styles.filter}>
        <Categories />
        <Sort />
      </div>
    </header>
  );
};

export default Header;
