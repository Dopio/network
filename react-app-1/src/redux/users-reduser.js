const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {id: 0, followed: false, name: 'Igor', status: 'Iam Hungry', location: {city: 'Samara', country: 'Ukrain'} },
        {id: 1, followed: true, name: 'Rodg', status: 'Hi hi, da?', location: {city: 'Ostashkov', country: 'Russia'} },
    ]
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( users => {
                    if (users.id === action.userID) {
                        return {...users, followed: true}
                    }
                })
            }
        }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( users => {
                    if (users.id === action.userID) {
                        return {...users, followed: false}
                    }
                })
            }

        case SET_USERS:
            return{
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    };
};

export const followActionCreator = (userID) => ({type: FOLLOW, userID})
export const unfollowActionCreator = (userID) => ({type: UNFOLLOW, userID})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;