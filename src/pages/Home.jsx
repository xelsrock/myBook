import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBooksAsync, selectBooksData, setTotalItems } from '../redux/slices/booksSlice';
import { selectFilter } from '../redux/slices/filterSlice';
import CardBook from '../components/CardBook/CardBook';
import LoadButton from '../components/LoadButton/LoadButton';
import Skeleton from '../components/CardBook/Skeleton';

const Home = () => {
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

  const skeleton = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const books = bookItems.map((obj) => <CardBook key={obj.id} {...obj} />);

  return (
    <>
      <h3 className="result">Found {status === 'loading' ? 0 : totalItems} results</h3>
      <div className="content">{status === 'loading' ? skeleton : books}</div>
      <LoadButton />
    </>
  );
};

export default Home;
