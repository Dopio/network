import { combineReducers, createStore } from 'redux';
import { profileReducer } from './myPosts-reducer';
import { messagesReducer } from './messages-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducer } from './users-reduser'
import { composeWithDevTools } from 'redux-devtools-extension';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;