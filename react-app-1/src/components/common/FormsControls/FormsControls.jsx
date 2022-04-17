import React from "react";
import TextField from '@mui/material/TextField';
import classes from './FormsControls.module.css'
import styled from "@emotion/styled";



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

const TextArea = ({ input, meta, ...props }) => {

    const hasError = meta.error;

    return (<>
        <div className={classes.formControl + ' ' + classes.error}>
            <CssTextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                {...input} {...props}
            />
        </div>
        {hasError !== 'error message' && <div className={classes.errorMessage}>{meta.error}</div>}
    </>
    );
};

export default TextArea;