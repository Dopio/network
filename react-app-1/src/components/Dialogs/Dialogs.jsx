import React from 'react';
import classes from './Dialogs.module.css';
import FriendDialoge from './Friend/Friend';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let friendsElements = props.state.dialogsData.map(dialog => <FriendDialoge name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messagesData.map(mes => <Message message={mes.message}/>);

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
            </div>
        </div>
    </div>
    );
  };
  
  export default Dialogs