import React from 'react';

import styles from './CardBook.module.scss';

const CardBook = () => {
  return (
    <div className={styles.root}>
      <div className={styles.cardImg}>
        <img
          src="http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          alt=""
        />
      </div>
      <a href="#" className={styles.categories}>
        Categories
      </a>
      <h3 className={styles.title}>Lorem ipsum dolor sit amet.</h3>
      <span className={styles.author}>Lorem, ipsum dolor.</span>
    </div>
  );
};

export default CardBook;
