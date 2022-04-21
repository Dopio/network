import usersAPI from '../../api/usersApi';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 45,
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
            }
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
            }

        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state;
    };
};

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unFollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching });


export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.requestUsers(currentPage, pageSize).then(responce => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(responce.items));
            /* this.props.setTotalUsersCount(responce.data.totalCount); */
        });
    }
};


export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userID))
        usersAPI.followAPI(userID).then(responce => {
            if (responce.resultCode === 0) {
                dispatch(followSuccess(userID));
            }
            dispatch(toggleFollowingProgress(false, userID))
        });
    }
};


export const unFollow = (userID) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID))
    usersAPI.unFollowAPI(userID).then(responce => {
        if (responce.resultCode === 0) {
            dispatch(unFollowSuccess(userID));
        }
        dispatch(toggleFollowingProgress(false, userID))
    });
};