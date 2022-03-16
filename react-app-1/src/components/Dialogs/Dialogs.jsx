import React from 'react';
import classes from './Dialogs.module.css';
import FriendDialoge from './Friend/Friend';
import Message from './Message/Message';


const Dialogs = () => {

    let dialogsData = [
        {name: 'Chel 0', id: '1'},
        {name: 'Chel 1', id: '2'},
        {name: 'Chel 2', id: '3'},
    ];

    let friendsElements = dialogsData.map(dialog => <FriendDialoge name={dialog.name} id={dialog.id}/>);

    let messagesData = [
        {message: 'Hi', id: '0'},
        {message: 'Bruh', id: '1'},
        {message: 'Wtb', id: '2'},
        {message: 'Egzi', id: '3'},
    ];

    let messagesElements = messagesData.map(mes => <Message message={mes.message}/>);

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