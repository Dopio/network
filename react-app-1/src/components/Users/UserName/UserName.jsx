import React from 'react';
import classes from './UserName.module.css';


const User = React.memo((name) => {
    return (
        <div className={classes.userName}>{name}</div>
    )
});

export default User;