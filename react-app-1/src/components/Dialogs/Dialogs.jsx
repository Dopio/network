import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Dialogs.module.css';
import FriendDialoge from './Friends/Friends';
import Message from './Message/Message';
/* import TextField from '@mui/material/TextField'; */


const Dialogs = (props) => {

    let friendsElements = props.dialogsData.map(dialog =>
        <FriendDialoge name={dialog.name} key={dialog.id} id={dialog.id}
        />);
    let messagesElements = props.messagesData.map(mes =>
        <Message message={mes.message} key={mes.id}
        />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={classes.dialog}>
            <div className={classes.dialog__container}>
                <div className={classes.dialog__friends}>
                    <div className={classes.dialog__friends_title}>
                        Friends
                    </div>
                    <div className={classes.dialog__friends_list}>
                        {friendsElements}
                    </div>
                </div>
                <div className={classes.dialog__messages}>
                    <div className={classes.dialog__messages_title}>
                        Messages
                    </div>
                    <div className={classes.dialog__messages_list}>
                        {messagesElements}
                    </div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
};

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.messages__input}>
            {/* <TextField id="outlined-basic" name='newMessageBody' label="Enter your message" variant="outlined" /> */}
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />
            <button className={classes.messages__button}>Send</button>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(addMessageForm);

export default Dialogs;