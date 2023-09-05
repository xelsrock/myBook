import React from 'react'

import styles from './Sort.module.scss';

const Sort = () => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Sort by</span>
      <select className={styles.sort} name="sort">
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
      </select>
    </div>
  )
}

export default Sort