import { getMe } from "../api/headerApi";


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        }
        default:
            return state;
    };
};

export const setAuthUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } })

export const authorization = (userId) => {

    return (dispatch) => {
        getMe(userId).then(responce => {
            if (responce.resultCode === 0) {
                let { id, login, email } = responce.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
    }
};