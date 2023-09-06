import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './scss/app.scss';

import Header from './components/Header/Header';
import CardBook from './components/CardBook/CardBook';
import LoadButton from './components/LoadButton/LoadButton';
import { selectBooksData, setItems, setTotalItems } from './redux/slices/booksSlice';
import { API_KEY } from './assets/URI';

function App() {
  const dispatch = useDispatch();
  const { bookItems, status } = useSelector(selectBooksData);

  const fetchBooks = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setItems(data.items));
      });
  };

  React.useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <h3 className="result">Found {bookItems.length} results</h3>
        <div className="content">
          {bookItems.map((obj) => (
            <CardBook key={obj.id} {...obj} />
          ))}
        </div>
        <LoadButton />
      </div>
    </div>
  );
}

export default App;
