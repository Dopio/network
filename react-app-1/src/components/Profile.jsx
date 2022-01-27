import React from 'react';
import ava from './../img/profile/ava.jpg';
import './Profile.css';


const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__container'>
        <div className="profile__header">
            <div className="profile__header_ava">
                <img src={ava} className='profile__avatar' alt="" />
            </div>
            <div className="profile__header_about">Lemeshonok S.V.<br/><br/>
                Date of birthday: 25.01.1998<br/>
                City: St.Petersburg
            </div>
        </div>
        <div className="profile__posts">
            <input type="text" />
        </div>
        <div className="profile__button">
            <button className='profile__button_button'>Send</button>
        </div>
        <div className="profile__sendPosts"></div>
      </div>
    </div>
  );
}

export default Profile