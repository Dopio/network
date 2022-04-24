import authAPI from "../../api/auth";
import { stopSubmit } from "redux-form";


const SET_USER_DATA = 'auth/SET_USER_DATA';

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
            };

        }
        default: return state;
    };
};

export const setAuthUserData = (userId, login, email, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
    let responce = await authAPI.getMe();
    if (responce.data.resultCode === 0) {
        let { id, login, email } = responce.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    };
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let responce = await authAPI.login(email, password, rememberMe);
    if (responce.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
    else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { email: message, password: message }));
    };
};

export const logout = () => async (dispatch) => {
    let responce = await authAPI.logout()
    if (responce.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    };
};