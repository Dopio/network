import React from 'react';
import classes from './UserName.module.css';


const User = (props) => {
    return (
        <div className={classes.userName}>{props.name}</div>
    )
};

export default User;