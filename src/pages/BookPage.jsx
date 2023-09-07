import React from 'react';

import { Link } from 'react-router-dom';

const BookPage = () => {
  return (
    <div className="book__page">
      <div className="book__img">
        <img src="../img/content.jpg" alt="book cover" />
      </div>

      <div className="book__content">
        <p className="book__categories">Lorem, ipsum.</p>

        <p className="book__title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, veniam.
        </p>

        <p className="book__authors">Lorem, ipsum dolor.</p>

        <p className="book__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, mollitia.
        </p>

        <Link to="/">
          <button className="button book__button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default BookPage;
