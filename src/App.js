import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './scss/app.scss';

import Header from './components/Header/Header';
import CardBook from './components/CardBook/CardBook';
import LoadButton from './components/LoadButton/LoadButton';
import { selectBooksData, setItems, setTotalItems } from './redux/slices/booksSlice';
import { API_KEY } from './assets/URI';
import { selectFilter } from './redux/slices/filterSlice';

function App() {
  const dispatch = useDispatch();
  const { bookItems, totalItems } = useSelector(selectBooksData);

  const { searchValue } = useSelector(selectFilter);

  const fetchBooks = () => {
    const search = searchValue ? `${searchValue}` : '';
    
    fetch(`https://www.googleapis.com/books/v1/volumes/?q=intitle:${search}&maxResults=30&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setItems(data.items));
        dispatch(setTotalItems(data.totalItems));
      }).catch(error => alert('Произошла ошибка при получении данных...('))
  };

  React.useEffect(() => {
    fetchBooks();
  }, [searchValue]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <h3 className="result">Found {totalItems} results</h3>
        <div className="content">
          {bookItems && bookItems.map((obj) => (
            <CardBook key={obj.id} {...obj} />
          ))}
        </div>
        <LoadButton />
      </div>
    </div>
  );
}

export default App;
