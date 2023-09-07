import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './scss/app.scss';

import Header from './components/Header/Header';
import CardBook from './components/CardBook/CardBook';
import LoadButton from './components/LoadButton/LoadButton';
import {
  fetchBooksAsync,
  selectBooksData,
  setItems,
  setTotalItems,
} from './redux/slices/booksSlice';
import { selectFilter } from './redux/slices/filterSlice';

function App() {
  const dispatch = useDispatch();
  const { bookItems, totalItems, status } = useSelector(selectBooksData);

  const { searchValue, category, sortValue } = useSelector(selectFilter);

  const getBooks = () => {
    const categories = `${category !== 'all' ? `+subject:${category}` : ''}`;

    dispatch(fetchBooksAsync({ searchValue, categories, sortValue }));

    dispatch(setTotalItems());
  };

  React.useEffect(() => {
    getBooks();
  }, [searchValue, category, sortValue]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <h3 className="result">Found {totalItems} results</h3>
        <div className="content">
          {bookItems && bookItems.map((obj) => <CardBook key={obj.id} {...obj} />)}
        </div>
        <LoadButton />
      </div>
    </div>
  );
}

export default App;
