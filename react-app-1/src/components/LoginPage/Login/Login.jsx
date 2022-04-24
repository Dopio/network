import React from "react";
import { reduxForm } from "redux-form";
import classes from './Login.module.css';
import LoginForm from "./LoginForm/LoginForm";
import { Redirect } from "react-router-dom";


const Login = React.memo(({login, isAuth}) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe);
    };

    if (isAuth) {
        return <Redirect to={'/Profile'} />
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                Login
            </div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
});

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;