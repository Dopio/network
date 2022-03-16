import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Friend.module.css';


const FriendDialoge = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.friend}>
            <Link to={path}>{props.name}</Link>
        </div>
    );
};

export default FriendDialoge