const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 49,
    currentPage: 1,
    isFetching: false,
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

        default:
            return state;
    };
};

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountActionCreator = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsFetchingActionCreator = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });