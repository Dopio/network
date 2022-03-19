import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state.js';
import {addMessage} from './redux/state.js';


let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();
};

export default rerenderEntireTree