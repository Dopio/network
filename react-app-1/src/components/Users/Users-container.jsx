import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/users-reduser';
import Users from './Users copy';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID));
        },
        unFollow: (userID) => {
            dispatch(unfollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;