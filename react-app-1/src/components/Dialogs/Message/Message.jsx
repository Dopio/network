import React from 'react';
import classes from './Message.module.css';

const Message = React.memo(({message}) => {
    return (
        <div className={classes.messageText}>{message}</div>
    );
});

export default Message;