import { Contacts } from '../ProfileInfo';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';
import classes from './ProfileData.module.css';


const ProfileData = ({ profile, updateStatus, status, isOwner, goToEditMode }) => {
    return <div className={classes.profile__data}>
      {profile?.fullName}<br /><br />
      Status:
      <ProfileStatusWithHooks statusFromProps={status} updateStatus={updateStatus} />
      <div>
        Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      <div>
        {profile.lookingForAJob &&
          <div>
            My professional skills:<br /> {profile.lookingForAJobDescription}
          </div>
        }
      </div>
      <div className={classes.aboutMe__wrapper}>
        <div className={classes.aboutMe__title}>
          About me:
        </div>
        <div className={classes.aboutMe__text}>
          {profile.aboutMe}
        </div>
      </div>
      <div className={classes.contacts_wrapper}>
        <div className={classes.contacts__title}>
          Contacts:
        </div>
        <div className={classes.contacts__body}>
          {Object.keys(profile.contacts).map(title => {
            if (profile.contacts[title] !== null || "") {
              return <Contacts key={title} contactTitle={title} contactValue={profile.contacts[title]} />
            }
          })}
        </div>
      </div>
      <div>
        {isOwner && <button onClick={goToEditMode}>Edit mode</button>}
      </div>
    </div>
  };

  export default ProfileData;