import React from 'react'

import styles from './Categories.module.scss';

const Categories = () => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Categories</span>
      <select className={styles.categories} name="categories">
        <option value="all">all</option>
        <option value="art">art</option>
        <option value="biography">biography</option>
        <option value="computers">computers</option>
        <option value="history">history</option>
        <option value="medical">medical</option>
        <option value="poetry">poetry</option>
      </select>
    </div>
  )
}

export default Categories