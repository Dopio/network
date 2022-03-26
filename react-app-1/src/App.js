import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import UsersContainer from './components/Users/Users.jsx';
import DialogsContainer from './components/Dialogs/Dialogs-container';
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <body className='body _container'>
          <div className='body__wrapper'>
            <div className='main__wrapper'>
              <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
              <Route path="/Profile" render={() => <Profile/>}/>
              <Route path="/Users" render={() => <UsersContainer/>}/>
            </div>
            <Sidebar />
          </div>
        </body>
      </div>
    </BrowserRouter>
  );
};

export default App;