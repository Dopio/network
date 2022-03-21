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
          addPost={props.addPost}
          updateNewPostText = {props.updateNewPostText}
          newPostText={props.profilePage.newPostText}/>
      </div>
    </div>
  );
};

export default Profile