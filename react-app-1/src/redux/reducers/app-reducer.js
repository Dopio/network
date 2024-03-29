import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'app/SET_INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    };
};

export const initializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeAPP = () => (dispatch) => {

    let promise = dispatch(getAuthUserData());

    dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        });

    dispatch(initializedSuccess());
};

export default appReducer;