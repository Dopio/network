import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getProfileThunk, getStatusThunk,
  updateStatusThunk, savePhotoThunk,
  saveProfileThunk
} from '../../redux/reducers/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('./login')
      };
    };

    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId);
  };

  componentDidMount() {
    this.refreshProfile();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  };

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunk}
        savePhoto={this.props.savePhotoThunk}
        saveProfile={this.props.saveProfileThunk}
      />
    );
  };
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk, saveProfileThunk }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);