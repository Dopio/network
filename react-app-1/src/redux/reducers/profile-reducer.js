import profileAPI from "../../api/ProfileApi";

const SEND_POST = 'profile/SEND_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';


let initialState = {
    postsData: [
        { id: '0', message: 'Hi, all!', likesCount: 0 },
        { id: '1', message: 'U can Write new Post ;D', likesCount: 16 },
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

        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        }

        default:
            return state;
    };
};

export const addPostActionCreator = (values) => ({ type: SEND_POST, values });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getProfileThunk = (userId) => async (dispatch) => {
    let responce = await profileAPI.getUserId(userId)
    dispatch(setUserProfile(responce.data));
};

export const getStatusThunk = (userId) => async (dispatch) => {
    let responce = await profileAPI.getStatus(userId)
    dispatch(setStatus(responce.data));
};

export const updateStatusThunk = (status) => async (dispatch) => {
    let responce = await profileAPI.updateStatus(status)
    if (responce.data.resultCode === 0) {
        dispatch(setStatus(status));
    };
};