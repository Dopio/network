import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';

let postsData = [
  {id: '0', message: 'Hi, amogus', likesCount: '0'},
  {id: '1', message: 'Hardcoding', likesCount: '16'},
];

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className='profile__container'>
        <Info/>
        <MyPosts/>
      </div>
    </div>
  );
}

export default Profile