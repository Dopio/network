import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts-container';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = React.memo(({profile, status, updateStatus}) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__container}>
        <ProfileInfo
          profile={profile}
          status={status}
          updateStatus={updateStatus}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
});

export default Profile;