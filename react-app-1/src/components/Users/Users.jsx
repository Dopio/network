import React from "react";
import classes from './Users.module.css';
import avatar from '../.././img/Users/Anonymous_emblem.png';
import { Link } from "react-router-dom";
import usersAPI from "../../api/usersApi";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {
            props.users.map(users => <div key={users.id}>
                <div className={classes.users}>
                    <div className={classes.users__container}>
                        <div className={classes.avatar}>
                            <Link to={'/Profile/' + users.id}>
                                <img src={users.photos.small != null ? users.photos.small : avatar}
                                    className={classes.avatarImage}
                                    alt='avatar'
                                />
                            </Link>
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
                                        ? <button onClick={() => {

                                            usersAPI.unFollowAPI(users.id).then(responce => {
                                                if  (responce.resultCode === 0) {
                                                    props.unFollow(users.id);
                                                }
                                            });

                                            }}>Unfollow</button>
                                        : <button onClick={() => {
                                            
                                            usersAPI.followAPI(users.id).then(responce => {
                                                if  (responce.resultCode === 0) {
                                                    props.follow(users.id);
                                                }
                                            });

                                            }}>Follow</button>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        }
        <div>
            <ul className={classes.usersPageList}>
                {pages.map(p => {
                    return (
                        <li className={props.currentPage === p && classes.selectedPage}
                            onClick={() => { props.onPageChanged(p) }}>{p}</li>
                    )
                })}
            </ul>
        </div>
    </div>
};

export default Users;