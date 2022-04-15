import profileAPI from "../api/ProfileApi";

const SEND_POST = 'SEND-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    postsData: [
        { id: '0', message: 'Hi, amogus', likesCount: 0 },
        { id: '1', message: 'Hardcoding', likesCount: 16 },
    ],
    profile: null,
    status: 'Hellow My Friend',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_POST: {
            let newPost = action.values;
            return {
                ...state,
                postsData: [...state.postsData, { id: 2, message: newPost, likesCount: 0 }],
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }

        default:
            return state;
    };
};

export const addPostActionCreator = (values) => ({ type: SEND_POST, values });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfileThunk = (userId) => (dispatch) => {
    profileAPI.getUserId(userId).then(responce => {
        dispatch(setUserProfile(responce.data));
    });
};

export const getStatusThunk = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(responce => {
        dispatch(setStatus(responce.data));
    });
};

export const updateStatusThunk = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(responce => {
        if (responce.data.ressultCode === 0) {
            dispatch(setStatus(status));
        };
    });
};