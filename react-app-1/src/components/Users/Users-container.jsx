import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reduser';
import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import usersAPI from '../../api/usersApi';


class usersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(responce => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(responce.items);
            /* this.props.setTotalUsersCount(responce.data.totalCount); */
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(responce => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(responce.items);
        });
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID));
        },
        unFollow: (userID) => {
            dispatch(unfollowActionCreator(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    };
}; */

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(usersContainer); 