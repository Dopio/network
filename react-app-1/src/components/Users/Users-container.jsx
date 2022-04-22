import {
    follow, unFollow, setCurrentPage, setTotalUsersCount,
    toggleFollowingProgress, requestUsers,
} from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
    getUsersSelector, getPageSize,
    getTotalUsersCount, getCurrentPage,
    getIsFetching,
} from '../../redux/selectors/users-selector';


class usersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber)
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
};

/* const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}; */

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
    }
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingProgress,
        requestUsers,
    }),
    withAuthRedirect,
)(usersContainer);