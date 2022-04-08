import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reduser'
import { getMe } from '../../api/headerApi';


class HeaderContainer extends React.Component {

  componentDidMount() {
    getMe()
      .then(responce => {
        if (responce.resultCode === 0) {
          let { id, login, email } = responce.data;
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