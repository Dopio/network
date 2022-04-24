import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Friends.module.css';


const FriendDialoge = ({id, name}) => {
    let path = "/dialogs/" + id;

    return (
        <div className={classes.friend}>
            <Link to={path}>{name}</Link>
        </div>
    );
};

export default FriendDialoge;