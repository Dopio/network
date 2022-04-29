import React from 'react';
import voidAva from '../../../img/Users/Anonymous_emblem.png';
import Preloader from '../../common/preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';


const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto }) => {

  if (!profile) {
    return <Preloader />
  };

  const onMaimPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  };

  return (
    <div className={classes.profile__info}>
      <div className={classes.profile__avatar}>
        {isOwner ?
          <div className={classes.ownersAvatar__wrapper}>
            <img className={classes.ownersAvatar} src={profile.photos.small} />
            <input type={'file'} onChange={onMaimPhotoSelected} />
          </div> :
          <img src={profile.photos.small !== null ? profile.photos.small : voidAva}
            className={classes.avatar} alt="Ava"
          />}
      </div>
      <div className={classes.profile__header_about}>
        {profile?.fullName}<br /><br />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} /><br />
      </div>
    </div>
  );
};

export default ProfileInfo;