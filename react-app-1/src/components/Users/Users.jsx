import React from "react";
import classes from './Users.module.css';
import avatar from '../.././img/Users/Anonymous_emblem.png';
import { Link } from "react-router-dom";
import { FollowBtn, UnfollowBtn } from "../common/FormsControls/FormsControls";
import PagesList from "../common/PagesList/PagesList";


let Users = React.memo(({ totalUsersCount, pageSize, users, follow, unFollow, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return <div>
        {
            users.map(users => <div key={users.id}>
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
                                        ? <UnfollowBtn
                                            users={users}
                                            unFollow={unFollow}
                                        >Unfollow</UnfollowBtn>
                                        : <FollowBtn
                                            users={users}
                                            follow={follow}
                                        >Follow</FollowBtn>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        }
        <div>
            <PagesList pages={pages} currentPage={currentPage} onPageChanged={onPageChanged}/>
        </div>
    </div>
});

export default Users;