import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts-container';
import Info from './Info/Info';


const Profile = (props) => {

  return (
    <div className={classes.profile}>
      <div className='profile__container'>
        <Info/>
        <MyPostsContainer store={props.store}/>
      </div>
    </div>
  );
};

export default Profile