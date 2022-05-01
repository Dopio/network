import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPosts-container';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = React.memo(({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__container}>
        <ProfileInfo
          isOwner={isOwner}
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          savePhoto={savePhoto}
          saveProfile={saveProfile}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
});

export default Profile;