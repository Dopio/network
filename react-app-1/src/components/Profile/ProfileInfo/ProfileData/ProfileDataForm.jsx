import React from "react";
import { Field, reduxForm } from "redux-form";
import required, { maxLengthCreator } from "../../../../utils/validators/validator";
import { MinHeightTextarea, TextArea } from "../../../common/FormsControls/FormsControls";
import classes from './ProfileData.module.css';


const maxLenght = maxLengthCreator(40);

const ProfileDataForm = ({ goToVieMode, handleSubmit }) => {
  return <form onSubmit={handleSubmit}>
    <Field
      component={TextArea}
      validate={[required, maxLenght]}
      name="fullName"
      label="Full name"
    /><br /><br />
    <div className={classes.job__body}>
      Looking for a job:
      <div className={classes.job__checkbox}>
        <Field
          name="lookingForAJob"
          component={'input'}
          type="checkbox"
        />
      </div>
    </div>
    <div className={classes.skills__body}>
      My professional skills:
      <div className={classes.skills__textArea}>
        <Field
          name="lookingForAJobDescription"
          placeholder="Skills"
          component={MinHeightTextarea}
        />
      </div>
    </div>
    <div className={classes.aboutMe__body}>
      <div className={classes.aboutMe__title}>
        About me:
      </div>
      <div className={classes.aboutMe__textArea}>
        <Field
          name="aboutMe"
          placeholder="Who are you?"
          component={MinHeightTextarea}
        />
      </div>
    </div>
    <div className={classes.contacts_wrapper}>
      <div className={classes.contacts__title}>
        Contacts:
      </div>
      {/* <div className={classes.contacts__body}>
        {Object.keys(profile.contacts).map(key => {
          return <Contacts contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div> */}
    </div>
    <div>
      <button onClick={() => { }}>Save and Close</button>
    </div>
  </form>
};

const ProfileDataFormReduxForm = reduxForm({
  form: 'edit_profile'
})(ProfileDataForm);

export default ProfileDataFormReduxForm;