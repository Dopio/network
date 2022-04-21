import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './reducers/profile-reducer';
import { messagesReducer } from './reducers/messages-reducer';
import { sidebarReducer } from './reducers/sidebar-reducer';
import { usersReducer } from './reducers/users-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reducers/auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './reducers/app-reducer';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

const composeEnchancers = composeWithDevTools({
    trace: true,
});

const store = createStore(rootReducer, composeEnchancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;