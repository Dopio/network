import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <body className='body _container'>
          <div className='body__wrapper'>
            <div className='main__wrapper'>
              <Route path="/Dialogs" render={() => <Dialogs 
                state={props.state.messagesPage} 
                addMessage={props.addMessage}/>}/>
              <Route path="/profile" render={() => <Profile 
                state={props.state.profilePage} 
                addPost={props.addPost}/>}/>
            </div>
            <Sidebar />
          </div>
        </body>
      </div>
    </BrowserRouter>
  );
};

export default App;