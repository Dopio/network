import React from "react";
import TextField from '@mui/material/TextField';
import classes from './FormsControls.module.css'
import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'gray',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'gray',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'gray',
        },
    },
});

export const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.error;
    return (<>
        <div className={classes.formControl + ' ' + classes.error}>
            <CssTextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                {...input}
                {...props}
            />
        </div>
        {hasError !== 'error message' && <div className={classes.errorMessage}>{meta.error}</div>}
    </>
    );
};

export const MinHeightTextarea = ({ input, meta, ...props }) => {
    const hasError = meta.error;
    return (<>
        <div>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={4}
                style={{ width: 350 }}
                {...props}
                {...input}
            />
        </div>
        {hasError !== 'error message' && <div className={classes.errorMessage}>{meta.error}</div>}
    </>
    );
};

export const UnfollowBtn = ({ unFollow, users }) => {
    return (
        <div>
            <Button
                size="small"
                variant="contained"
                onClick={() => {
                    unFollow(users.id)
                }}
            >Unfollow</Button>
        </div>
    );
};

export const FollowBtn = ({ follow, users }) => {
    return (
        <div>
            <Button
                size="small"
                variant="contained"
                onClick={() => {
                    follow(users.id)
                }}
            >Follow</Button>
        </div>
    );
};