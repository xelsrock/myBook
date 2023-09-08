import React from 'react';

import styles from './Sort.module.scss';

type SortProps = {
  onChangeSort: (value: string) => void,
}

const sort: string[] = ['relevance', 'newest'];

const Sort: React.FC<SortProps> = ({ onChangeSort }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Sort by</span>
      <select
        onChange={(event) => onChangeSort(event.target.value)}
        className={styles.sort}
        name="sort">
        {sort.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
