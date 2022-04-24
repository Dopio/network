import React from "react";
import { Field } from "redux-form";
import required, { maxLengthCreator } from "../../../../utils/validators/validator";
import {TextArea} from "../../../common/FormsControls/FormsControls";
import classes from './LoginForm.module.css';

const maxLenght = maxLengthCreator(40);

let LoginForm = React.memo(({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.body}>
                <div className={classes.login}>
                    <Field
                        component={TextArea}
                        validate={[required, maxLenght]}
                        name="email"
                        label="Email"
                    />
                </div>
                <div className={classes.password}>
                    <Field
                        component={TextArea}
                        validate={[required, maxLenght]}
                        name="password"
                        label="Password"
                        type="password"
                    />
                </div>
                <div className={classes.remeberMe}>
                    <Field
                        component={'input'}
                        name="remeberMe"
                        type="checkbox"
                    />
                    Remeber me
                </div>
                <button>Login</button>
            </div>
        </form>
    );
});

export default LoginForm;