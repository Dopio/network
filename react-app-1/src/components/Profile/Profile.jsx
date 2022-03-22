import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Info from './Info/Info';


const Profile = (props) => {

  return (
    <div className={classes.profile}>
      <div className='profile__container'>
        <Info/>
        <MyPosts 
          postsData={props.profilePage.postsData} 
          newPostText={props.profilePage.newPostText}
          dispatch = {props.dispatch}
        />
      </div>
    </div>
  );
};

export default Profile