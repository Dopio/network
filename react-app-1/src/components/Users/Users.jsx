import React from 'react';
import classes from './Users.module.css';
import avatar from '../.././img/Users/Anonymous_emblem.png'
import * as axios from 'axios';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount);
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
        });
    }

    render () {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            {
                this.props.users.map(users => <div key={users.id}>
                    <div className={classes.users}>
                        <div className={classes.users__container}>
                            <div className={classes.avatar}>
                                <img src={users.photos.small !=null ? users.photos.small : avatar} 
                                    className={classes.avatarImage}
                                    alt='avatar'
                                />
                            </div>
                            <div className={classes.body}>
                                <div className={classes.userInfo}>
                                    <div className={classes.userName}>
                                        {users.name}
                                    </div>
                                    <div className={classes.userLocation}>
                                        <div className={classes.userCity}>
                                            {/* {users.location.city} */}
                                        </div>
                                        <div className={classes.userCountry}>
                                            {/* {users.location.country} */}
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.userStatus}>
                                    {users.status}
                                </div>
                                <div className={classes.userConnect}>
                                    <div className={classes.userWtireMessage}>
                                        userWtireMessage
                                    </div>
                                    <div className={classes.userFollow}>
                                        {users.followed
                                            ? <button onClick={() => { this.props.unFollow(users.id) }}>Unfollow</button>
                                            : <button onClick={() => { this.props.follow(users.id) }}>Follow</button>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <div className={classes.showMore}>
                <button onClick={this.getUsers} className={classes.showMore__button}>Show more</button>
            </div>
            <div>
                <ul className={classes.usersPageList}>
                    {pages.map(p => {
                        return (
                            <li className={this.props.currentPage === p && classes.selectedPage}
                            onClick={ () => {this.onPageChanged(p) }}>{p}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    }
}

export default Users;