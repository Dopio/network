import React from 'react';
import Logo from './../img/Logo.svg';
import rss from './../img/rss.svg';
import users from './../img/users.svg';
import briefcase from './../img/briefcase.svg';
import Vector from './../img/Vector.svg';
import bell from './../img/bell.svg';
import './Header.css';


const Header = () => {
  return (
    <header className='Header'>
      <div className='header__container'>
        <div className='header__logo'>
          <img src={Logo} className='image' alt='logo' />
        </div>
        <div className='header__menu_item'>
            <div className='header__menu_item_image'>
              <img src={users} alt='' />
            </div>
            <div className='header__menu_item_text'>profile</div>
          </div>
        <div className='header__menu'>
          <div className='header__menu_item'>
            <div className='header__menu_item_image'>
              <img src={rss} alt='' />
            </div>
            <div className='header__menu_item_text'>messeges</div>
          </div>
          <div className='header__menu_item'>
            <div className='header__menu_item_image'>
              <img src={briefcase} alt='' />
            </div>
            <div className='header__menu_item_text'>jobs</div>
          </div>
          <div className='header__menu_item'>
            <div className='header__menu_item_image'>
              <img src={Vector} alt='' />
            </div>
            <div className='header__menu_item_text'>chat</div>
          </div>
          <div className='header__menu_item'>
            <div className='header__menu_item_image'>
              <img src={bell} alt='' />
            </div>
            <div className='header__menu_item_text'>notices</div>
          </div>
        </div>
        <div className='header__search'>
          <input type={Text} className='header__search_search' />
        </div>
      </div>
    </header>
  );
}

export default Header