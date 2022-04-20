import authAPI from "../api/auth";
import { stopSubmit } from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }

        }
        default:
            return state;
    };
};

export const setAuthUserData = (userId, login, email, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } })

export const getAuthUserData = () => (dispatch) => {

    return authAPI.getMe().then(responce => {
        if (responce.data.resultCode === 0) {
            let { id, login, email } = responce.data.data;
            dispatch(setAuthUserData(id, login, email, true));
        };
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(responce => {
            console.log(responce)
            if (responce.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            else {
                let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', { email: message, password: message }));
            };
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(responce => {
            if (responce.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            };
        });
};