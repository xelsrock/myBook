import React from 'react';
import { useSelector } from 'react-redux';

import { fetchBooksAsync, selectBooksData, setStartIndex } from '../redux/slices/booksSlice';
import { selectFilter } from '../redux/slices/filterSlice';
import CardBook from '../components/CardBook/CardBook';
import LoadButton from '../components/LoadButton/LoadButton';
import Skeleton from '../components/CardBook/Skeleton';
import { useAppDispatch } from '../redux/store';


const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { bookItems, totalItems, status, startIndex } = useSelector(selectBooksData);

  const { searchValue, category, sortValue } = useSelector(selectFilter);

  const getBooks = () => {
    const categories = `${category !== 'all' ? `+subject:${category}` : ''}`;
    dispatch(fetchBooksAsync({ searchValue, categories, sortValue, startIndex }));
  };

  React.useEffect(() => {
    getBooks();
  }, [searchValue, category, sortValue, startIndex]);

  const onLoadMore = () => {
    dispatch(setStartIndex());
  };

  const skeleton = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
  const books = bookItems.map((obj: any) => <CardBook key={obj.id} {...obj} />);

  return (
    <>
      <h3 className="result">Found {status === 'loading' ? 0 : totalItems} results</h3>
      <div className="content">{status === 'loading' ? skeleton : books}</div>
      <LoadButton onLoadMore={onLoadMore}/>
    </>
  );
};

export default Home;
