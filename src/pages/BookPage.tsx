import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { API_KEY } from '../API/ApiKey';

type BookType = {
  imageLinks: {
    smallThumbnail: string;
  };
  categories: string[];
  title: string;
  authors: string[];
  description: string;
};

const BookPage: React.FC = () => {
  const { id } = useParams();

  const [book, setBook] = React.useState<BookType>();

  React.useEffect(() => {
    async function fetchDataBook() {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`,
        );
        setBook(data.volumeInfo);
      } catch (error) {
        alert('Произошла ошибка при получении данных с сервера :(');
        console.error(error);
      }
    }

    fetchDataBook();
  }, []);

  return (
    <div className="book__page">
      {book ? (
        <>
          <div className="book__img">
            <img src={book.imageLinks.smallThumbnail || ''} alt="book cover" />
          </div>
          <div className="book__content">
            <p className="book__categories">{book.categories || ''}</p>

            <p className="book__title">{book.title || ''}</p>

            <p className="book__authors">{book.authors ? book.authors.map((str) => str + ', ') : ''}</p>

            <p className="book__description">{book.description || ''}</p>

            <Link to="/">
              <button className="button book__button">Back</button>
            </Link>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default BookPage;
