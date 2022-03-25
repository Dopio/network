import './index.css';
import store from './redux/redux-store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
        <App 
            store={store}
        />
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();
};

rerenderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});