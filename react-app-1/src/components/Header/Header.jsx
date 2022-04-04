import React from 'react';
import Logo from './../../img/Header/Logo.svg';
import rss from './../../img/Header/rss.svg';
import users from './../../img/Header/users.svg';
import briefcase from './../../img/Header/briefcase.svg';
import Vector from './../../img/Header/Vector.svg';
import bell from './../../img/Header/bell.svg';
import classes from './Header.module.css';
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.header__container}>
        <div className={classes.header__logo}>
          <img src={Logo} className='image' alt='logo' />
        </div>
        <div className='header__menu_item'>
          <Link to='/Profile'>
            <div className={classes.header__menu_item_image}>
              <img src={users} alt='' />
            </div>
            <div className={classes.header__menu_item_text}>profile</div>
          </Link>
          </div>
        <div className={classes.header__menu}>
          <div className='header__menu_item'>
            <Link to='/Dialogs'>
              <div className={classes.header__menu_item_image}>
                <img src={rss} alt='' />
              </div>
              <div className={classes.header__menu_item_text}>messeges</div>
            </Link>
          </div>
          <div className='header__menu_item'>
            <div className={classes.header__menu_item_image}>
              <img src={briefcase} alt='' />
            </div>
            <div className={classes.header__menu_item_text}>jobs</div>
          </div>
          <div className='header__menu_item'>
            <Link to='/Users'>
              <div className={classes.header__menu_item_image}>
                <img src={Vector} alt='' />
              </div>
              <div className={classes.friends}>
                <div className={classes.header__menu_item_text}>Users</div>
              </div>
            </Link>
          </div>
          <div className='header__menu_item'>
            <div className={classes.header__menu_item_image}>
              <img src={bell} alt='' />
            </div>
            <div className={classes.header__menu_item_text}>notices</div>
          </div>
        </div>
        <div className={classes.header__search}>
          <input className={classes.header__search_search} />
        </div>
      </div>
    </header>
  );
}

export default Header