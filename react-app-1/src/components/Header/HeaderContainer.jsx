import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authorization } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authorization(this.props.userID);
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
  authorization,
})(HeaderContainer);