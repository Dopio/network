import React from "react";
import { Field } from "redux-form";
import classes from './LoginForm.module.css';


let LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.body}>
                <Field component={'input'} name="Login" type="text" placeholder="Login" /><br />
                <Field component={'input'} name="Password" type="text" placeholder="Password" />
                <div>
                    <Field component={'input'} name="RemeberMe" type="checkbox" /> Remeber me
                </div>
                <button>Login</button>
            </div>
        </form>
    )
};

export default LoginForm;