import usersAPI from '../../api/usersApi';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userID) {
                        return { ...users, followed: true }
                    }
                    return users;
                })
            };
        }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userID) {
                        return { ...users, followed: false }
                    }
                    return users;
                })
            };

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }

        default: return state;
    };
};

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unFollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching });

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let responce = await usersAPI.requestUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(responce.items));
    dispatch(setTotalUsersCount(responce.totalCount));
};


const followUnfollowFlow = async (userID, dispatch, APImethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userID))
    let responce = await APImethod(userID)
    if (responce.resultCode === 0) {
        dispatch(actionCreator(userID));
    };
    dispatch(toggleFollowingProgress(false, userID));
}

export const follow = (userID) => async (dispatch) => {
    let APImethod = usersAPI.followAPI.bind(usersAPI);
    let actionCreator = followSuccess;
    followUnfollowFlow(userID, dispatch, APImethod, actionCreator)
};

export const unFollow = (userID) => async (dispatch) => {
    let APImethod = usersAPI.unFollowAPI.bind(usersAPI);
    let actionCreator = unFollowSuccess;
    followUnfollowFlow(userID, dispatch, APImethod, actionCreator)
};