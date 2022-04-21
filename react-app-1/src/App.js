import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/Header-container.jsx';
import ProfileContainer from './components/Profile/Profile-container.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import UsersContainer from './components/Users/Users-container.jsx';
import DialogsContainer from './components/Dialogs/Dialogs-container';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginContainer from './components/LoginPage/Login/Login-container';
import { connect } from 'react-redux';
import { initializeAPP } from './redux/reducers/app-reducer';
import Preloader from './components/common/preloader/Preloader';


class App extends Component {

  componentDidMount() {
    this.props.initializeAPP(this.props.userID);
  };

  render() {

    if (!this.props.initialized)
      return <Preloader/>

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
  }
};

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStatetoProps, { initializeAPP })(App);