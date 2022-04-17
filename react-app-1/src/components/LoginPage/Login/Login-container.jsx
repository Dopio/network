import React from "react";
import { connect } from "react-redux";
import Login from './Login';
import { login } from '../../../redux/auth-reducer'


class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} />
    }
};

export default connect(null, { login })(LoginContainer);