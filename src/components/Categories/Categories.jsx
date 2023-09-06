import React from 'react';

import styles from './Categories.module.scss';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

const Categories = ({ onChangeCategory }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Categories</span>
      <select onChange={(event) => onChangeCategory(event.target.value)} className={styles.categories} name="categories">
        {categories.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
