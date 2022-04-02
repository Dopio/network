import React from 'react';
import classes from './Users.module.css';
import avatar from '../.././img/Users/Anonymous_emblem.png'
import * as axios from 'axios';


class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
                this.props.setUsers(responce.data.items);
            });
        }
    };

    render () {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize;

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
            <div className={classes.pages}>
                {/* {pages.map(pages =>{
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                })} */}

                    <ul className={classes.ul}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>

            </div>
        </div>
    }
}

export default Users;