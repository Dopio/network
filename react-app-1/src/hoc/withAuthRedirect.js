import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


let mapStateToPropsForRedurect = (state) => ({
    isAuth: state.auth.isAuth,
  });

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) return <Redirect to='/Login' />

            return <Component {...this.props} />
        };
    };

    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedurect) (RedirectComponent);

    return ConnectAuthRedirectComponent;
};