import React, { useState } from 'react';
import voidAva from '../../../img/Users/Anonymous_emblem.png';
import Preloader from '../../common/preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileData/ProfileDataForm';


const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  };

  const onMaimPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  };

  const onSubmit = async (formData) => {
    await saveProfile(formData);
    setEditMode(false);
  };

  return (
    <div className={classes.profile__wrapper}>
      <div className={classes.profile__avatar}>
        {isOwner ?
          <div className={classes.ownersAvatar__wrapper}>
            <img className={classes.ownersAvatar} src={profile.photos.small} alt='Ava' />
            <input type={'file'} onChange={onMaimPhotoSelected} />
          </div> :
          <img src={profile.photos.small !== null ? profile.photos.small : voidAva}
            className={classes.avatar} alt="Ava"
          />}
      </div>

      {editMode ?
        <ProfileDataForm
          onSubmit={onSubmit}
          profile={profile}
          initialValues={profile}
        />
        :
        <ProfileData
          goToEditMode={() => { setEditMode(true) }}
          isOwner={isOwner}
          profile={profile}
          status={status}
          updateStatus={updateStatus}
        />
      }

    </div>
  );
};

export const Contacts = ({ contactTitle, contactValue }) => {
  return <div>{contactTitle}: {contactValue}</div>
};

export default ProfileInfo;