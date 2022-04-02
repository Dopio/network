const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0
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
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    };
};

export const followActionCreator = (userID) => ({ type: FOLLOW, userID });
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });