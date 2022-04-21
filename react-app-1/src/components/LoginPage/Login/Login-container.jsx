import React from "react";
import { connect } from "react-redux";
import Login from './Login';
import { login } from '../../../redux/reducers/auth-reducer'


class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} />
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(LoginContainer);