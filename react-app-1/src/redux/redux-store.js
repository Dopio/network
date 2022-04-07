import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducer } from './users-reduser'
import { composeWithDevTools } from 'redux-devtools-extension';
import {authReducer} from './auth-reduser';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

const composeEnchancers = composeWithDevTools({
    trace: true,
})

const store = createStore(rootReducer, composeEnchancers());

window.store = store;

export default store;