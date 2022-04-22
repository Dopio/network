import React from 'react';
import voidAva from '../../../img/Users/Anonymous_emblem.png';
import Preloader from '../../common/preloader/Preloader';
import classes from './ProfileInfo.module.css';
/* import ProfileStatus from './ProfileStatus/ProfileStatus'; */
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profile__info}>
      <div className={classes.profile__avatar}>
        <img src={props.profile?.photos.small != null ? props.profile.photos.small : voidAva}
          className={classes.avatar} alt="Ava"
        />
      </div>
      <div className={classes.profile__header_about}>
        {props.profile?.fullName}<br /><br />
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/><br />
      </div>
    </div>
  );
};

export default ProfileInfo;