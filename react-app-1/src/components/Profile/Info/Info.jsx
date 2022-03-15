import React from 'react';
import ava from './../../../img/profile/ava.jpg';
import classes from './Info.module.css';


const Info = () => {
  return (
    <div className={classes.profile__info}>
        <div className="profile__header_ava">
            <img src={ava} className={classes.profile__avatar} alt="" />
        </div>
        <div className="profile__header_about">Lemeshonok S.V.<br/><br/>
            Date of birthday: 25.01.1998<br/>
            City: St.Petersburg
        </div>
    </div>    
  );
}

export default Info