import React from 'react';
import ava from './../../../../img/profile/ava.jpg';
import classes from './Post.module.css';

const Post = React.memo(({message}) => {
    return (
        <div className={classes.mySendPosts}>
            <div className={classes.mySendPosts_post}>
                <img src={ava} alt="" />
                <div>{message}</div>
            </div>
        </div>
    );
});

export default Post;