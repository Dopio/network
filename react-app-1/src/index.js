import './index.css';
import state from './redux/state.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state.js';
import {addMessage} from './redux/state.js';
import {updateNewPostText} from './redux/state.js';
import {subscribe} from './redux/state.js';


let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);