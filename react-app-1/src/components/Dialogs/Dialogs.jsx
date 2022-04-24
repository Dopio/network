import React from 'react';
import { Field, reduxForm } from 'redux-form';
import required, { maxLengthCreator } from '../../utils/validators/validator';
import {TextArea} from '../common/FormsControls/FormsControls';
import classes from './Dialogs.module.css';
import FriendDialoge from './Friends/Friends';
import Message from './Message/Message';

const maxLenght = maxLengthCreator(5);

const Dialogs = React.memo(({dialogsData, messagesData, sendMessage}) => {

    let friendsElements = dialogsData.map(dialog =>
        <FriendDialoge name={dialog.name} key={dialog.id} id={dialog.id}
        />);
    let messagesElements = messagesData.map(mes =>
        <Message message={mes.message} key={mes.id}
        />);

    let addNewMessage = (values) => {
        sendMessage(values.newMessageBody);
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
});

const addMessageForm = (handleSubmit) => {
    return (
        <form onSubmit={handleSubmit} className={classes.messages__input}>
            <div className={classes.writeMessage__textArea}>
                <Field
                    component={TextArea}
                    name='newMessageBody'
                    validate={[required, maxLenght]}
                    label="Write your post"
                />
            </div>
            <button className={classes.messages__button}>Send</button>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(addMessageForm);

export default Dialogs;