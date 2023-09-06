import React from 'react';

import styles from './CardBook.module.scss';

const CardBook = ({ volumeInfo }) => {
  
  return (
    <div className={styles.root}>
      <div className={styles.cardImg}>
        <img
          src={volumeInfo.imageLinks?.smallThumbnail || '../img/bookNotFound.jpg'}
          alt={'Books cover'}
        />
      </div>
      <a href="#" className={styles.categories}>
        {volumeInfo.categories ? volumeInfo.categories[0].split(' ')[0] : ''}
      </a>
      <h3 className={styles.title}>{volumeInfo.title}</h3>
      <span className={styles.author}>{volumeInfo.authors}</span>
    </div>
  );
};

export default CardBook;
