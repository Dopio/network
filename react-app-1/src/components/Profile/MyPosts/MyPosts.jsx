import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import postsData from './../Profile.jsx';

const MyPosts = (props) => {

    let postsData = [
        {id: '0', message: 'Hi, amogus', likesCount: '0'},
        {id: '1', message: 'Hardcoding', likesCount: '16'},
    ];

    let postsElements = postsData.map(po => <Post message={po.message}/>);

    return (
    <div className='profile__container'>
        <div className='myPosts'>My posts</div>
        <input type="text" />
        <div className={classes.profile__button}>
            <button className='profile__button_button'>Send</button>
        </div>
        {postsElements}
    </div>
    );
  };
  
  export default MyPosts