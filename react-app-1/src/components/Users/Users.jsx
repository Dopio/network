import React from "react";
import classes from './Users.module.css';
import avatar from '../.././img/Users/Anonymous_emblem.png';


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
                            <img src={users.photos.small != null ? users.photos.small : avatar}
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
                                        ? <button onClick={() => { props.unFollow(users.id) }}>Unfollow</button>
                                        : <button onClick={() => { props.follow(users.id) }}>Follow</button>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        }
        {/* <div className={classes.showMore}>
        <button onClick={props.getUsers} className={classes.showMore__button}>Show more</button>
    </div> */}
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