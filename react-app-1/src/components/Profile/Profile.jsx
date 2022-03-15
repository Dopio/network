import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';


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