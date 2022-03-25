import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts-container';
import Info from './Info/Info';


const Profile = () => {

  return (
    <div className={classes.profile}>
      <div className='profile__container'>
        <Info/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile