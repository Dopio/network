import { combineReducers, createStore } from 'redux';
import { profileReducer } from './myPosts-reducer';
import { messagesReducer } from './messages-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducer } from './users-reduser'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;