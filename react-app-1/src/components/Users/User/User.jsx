import React from 'react';
import classes from './User.module.css';
import avatar from './../../../img/Users/Anonymous_emblem.svg.png';


const User = (props) => {
    return (
    <div className={classes.users}>
        <div className={classes.users__container}>
            <div className={classes.avatar}>
                <img  src={avatar} className={classes.avatarImage} alt='ava'/>
            </div>
            <div className={classes.body}>
                <div className={classes.userInfo}>
                    <div className={classes.userName}>
                        Sas
                    </div>
                    <div className={classes.userLocation}>
                        Spb
                    </div>
                </div>
                <div className={classes.userStatus}>
                    My status is Rofler?
                </div>
                <div className={classes.userConnect}>
                    <div className={classes.userWtireMessage}>
                        userWtireMessage
                    </div>
                    <div className={classes.userFollow}>
                        userFollow
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default User;