import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const MainLayout = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;