import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts-container';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

  return (
    <div className={classes.profile}>
      <div className={classes.profile__container}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;