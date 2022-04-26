import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/Header-container.jsx';
import ProfileContainer from './components/Profile/Profile-container.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LoginContainer from './components/LoginPage/Login/Login-container';
import { connect } from 'react-redux';
import { initializeAPP } from './redux/reducers/app-reducer';
import Preloader from './components/common/preloader/Preloader';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/Dialogs-container'));
const UsersContainer = React.lazy(() => import('./components/Users/Users-container.jsx'));



class App extends Component {

  componentDidMount() {
    this.props.initializeAPP(this.props.userID);
  };

  render() {

    if (!this.props.initialized)
      return <Preloader />

    return (
      <BrowserRouter >
        <div className="wrapper">
          <HeaderContainer />
          <div className='body _container'>
            <div className='body__wrapper'>
              <div className='main__wrapper'>
                <Route path="/Dialogs" render={() => {
                  return (
                    <React.Suspense fallback={<Preloader />}>
                      <DialogsContainer />
                    </React.Suspense>
                  );
                }} />
                <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/Users" render={() => {
                  return (
                    <React.Suspense fallback={<Preloader />}>
                      <UsersContainer />
                    </React.Suspense>
                  );
                }} />
                <Route path="/Login" render={() => <LoginContainer />} />
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  };
};

const mapStatetoProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStatetoProps, { initializeAPP })(App);