import React from "react";
import { Field } from "redux-form";
import required, { maxLengthCreator } from "../../../../utils/validators/validator";
import TextArea from "../../../common/FormsControls/FormsControls";
import classes from './LoginForm.module.css';

const maxLenght = maxLengthCreator(25);

let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.body}>
                <div className={classes.login}>
                    <Field
                        component={TextArea}
                        validate={[required, maxLenght]}
                        name="Login"
                        label="Login"
                    />
                </div>
                <div className={classes.password}>
                    <Field
                        component={TextArea}
                        validate={[required, maxLenght]}
                        name="Password"
                        label="Password"
                    />
                </div>
                <div className={classes.remeberMe}>
                    <Field component={'input'} name="RemeberMe" type="checkbox" />
                    Remeber me
                </div>
                <button>Login</button>
            </div>
        </form>
    )
};

export default LoginForm;