import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';


class profileContainer extends React.Component {



  render() {
    return (
      <Profile
        {...this.props}
      />
    );
  }
};

/* let mapStateToProps = (state) => {
  return {

  }
} */

export default profileContainer;