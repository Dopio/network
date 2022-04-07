import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reduser'


class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
      withCredentials: true
    })
      .then(responce => {
        if (responce.data.resultCode === 0) {
          let {id, login, email} = responce.data.data;
          this.props.setAuthUserData(id, login, email);
        }
      });
  };

  render() {
    return <Header {...this.props} />
  }
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
};

export default connect(mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);