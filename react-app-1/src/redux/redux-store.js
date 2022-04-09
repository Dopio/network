import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducer } from './users-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk';


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

const store = createStore(rootReducer, composeEnchancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;