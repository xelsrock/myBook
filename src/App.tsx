import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './scss/app.scss';

import Home from './pages/Home';
import MainLayout from './layouts/MainLoyout';
import BookPage from './pages/BookPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />}/>
        <Route path='bookpage/:id' element={<BookPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
