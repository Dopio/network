import React from "react";
import classes from './Registr.module.css';
import { TextField } from "@mui/material";


let Registration = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                Sign Up and connect with friends and the world around you on LAGOM
            </div>
            <form>
                <div className={classes.body}>
                    <TextField id="outlined-basic" label="First name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last name" variant="outlined" />
                </div>
            </form>
        </div>
    );
};

export default Registration;