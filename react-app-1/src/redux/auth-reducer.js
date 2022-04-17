import authAPI from "../api/auth";


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
                ...action.payload,
                isAuth: true,
            }

        }
        default:
            return state;
    };
};

export const setAuthUserData = (userId, login, email, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } })

export const getAuthUserData = () => (dispatch) => {
    authAPI.getMe().then(responce => {
        if (responce.resultCode === 0) {
            let { id, login, email } = responce.data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(responce => {
            if (responce.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(responce => {
            if (responce.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};