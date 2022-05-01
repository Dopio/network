import profileAPI from "../../api/ProfileApi";

const SEND_POST = 'profile/SEND_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCSESS = 'profile/SAVE_PHOTO_SUCCSESS';


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
                profile: action.profile
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

        case SAVE_PHOTO_SUCCSESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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
export const savePhotoSuccsess = (photos) => ({ type: SAVE_PHOTO_SUCCSESS, photos });

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

export const savePhotoThunk = (file) => async (dispatch) => {
    let responce = await profileAPI.savePhoto(file)
    if (responce.data.resultCode === 0) {
        dispatch(savePhotoSuccsess(responce.data.data.photos))
    };
};

export const saveProfileThunk = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const responce = await profileAPI.saveProfile(profile)
    if (responce.data.resultCode === 0) {
        dispatch(getProfileThunk(userId))
    };
};