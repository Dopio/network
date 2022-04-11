import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/Header-container.jsx';
import ProfileContainer from './components/Profile/Profile-container.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import UsersContainer from './components/Users/Users-container.jsx';
import DialogsContainer from './components/Dialogs/Dialogs-container';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginContainer from './components/Login/Login-container';


const App = () => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <div className='body _container'>
          <div className='body__wrapper'>
            <div className='main__wrapper'>
              <Route path="/Dialogs" render={() => <DialogsContainer />} />
              <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/Users" render={() => <UsersContainer />} />
              <Route path="/Login" render={() => <LoginContainer />} />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;