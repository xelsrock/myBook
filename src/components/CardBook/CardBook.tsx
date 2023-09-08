import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CardBook.module.scss';

export type CardBookProps = {
  id: string,
  volumeInfo: {
    imageLinks: {
      smallThumbnail: string,
    },
    categories: string[],
    title: string,
    authors: string[],
  },
}

const CardBook: React.FC<CardBookProps> = ({ id, volumeInfo }) => {
  return (
    <div className={styles.root}>
      <div className={styles.cardImg}>
        <Link to={`/bookpage/${id}`}>
          <img
            src={volumeInfo.imageLinks?.smallThumbnail || '../img/bookNotFound.jpg'}
            alt={'Books cover'}
          />
        </Link>
      </div>
      <span className={styles.categories}>
        {volumeInfo.categories ? volumeInfo.categories[0].split(' ')[0] : ''}
      </span>
      <h3 className={styles.title}>{volumeInfo.title}</h3>
      <span className={styles.author}>{volumeInfo.authors}</span>
    </div>
  );
};

export default CardBook;
