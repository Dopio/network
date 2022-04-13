import profileAPI from "../api/ProfileApi";

const SEND_POST = 'SEND-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';


let initialState = {
    postsData: [
        { id: '0', message: 'Hi, amogus', likesCount: 0 },
        { id: '1', message: 'Hardcoding', likesCount: 16 },
    ],
    newPostText: '',
    profile: null,
    status: '',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }

        }

        case SEND_POST: {
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
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

        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status,

            }
        }
        default:
            return state;
    };
};

export const addPostActionCreator = () => ({ type: SEND_POST });
export const onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const updateStatus = (status) => ({ type: UPDATE_STATUS, status });

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
        }
    });
};