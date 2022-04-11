import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunk } from '../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 23320;
    };
    this.props.getProfileThunk(userId);
  };

  render() {

    if (this.props.isAuth === false) return <Redirect to={'/Login'} />;

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
      />
    );
  };
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  getProfileThunk,
})(WithUrlDataContainerComponent); 