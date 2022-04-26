import React from "react";
import { reduxForm } from "redux-form";
import classes from './Login.module.css';
import LoginForm from "./LoginForm/LoginForm";
import { Redirect } from "react-router-dom";


const Login = React.memo(({ login, isAuth }) => {

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
            <div className={classes.body__wrapper}>
                <LoginReduxForm onSubmit={onSubmit} />
                <div className={classes.test__wrapper}>
                    <div className={classes.test__title}>
                        Email и Password  for testing
                    </div>
                    <div className={classes.text__body}>
                        <div className={classes.text__email}>
                            <span className={classes.bold}>Email:</span> tester1990@internet.ru
                        </div>
                        <div className={classes.text__password}>
                            <span className={classes.bold}>Password:</span> testpass
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;