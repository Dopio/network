import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from "react-router-dom";

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <body className='body _container'>
          <div className='body__wrapper'>
            <div className='main__wrapper'>
              <Route path="/profile" component={Profile}/>
              <Route path="/dialogs" component={Dialogs}/>
            </div>
            <Sidebar />
          </div>
        </body>
      </div>
  );
}
export default App;
