import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
    <div className='profile__container'>
        <div className='myPosts'>My posts</div>
        <input type="text" />
        <div className={classes.profile__button}>
            <button className='profile__button_button'>Send</button>
        </div>
        <Post message="Hi, amogus"/>
        <Post message="Hard"/>
    </div>
    );
  }
  
  export default MyPosts