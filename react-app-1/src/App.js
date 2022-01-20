import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <body className='body _container'>
        <div className='body__wrapper'>
          <Profile />
          <Sidebar />
          </div>
      </body>
    </div>
  );
}
export default App;
