import React from 'react';
import classes from './Dialogs.module.css';
import Friend from './Friend/Friend';
import Message from './Message/Message';


const Dialogs = (props) => {

    let FriendsListData = [
        {name: 'Chel 0', id: '1'},
        {name: 'Chel 1', id: '2'},
        {name: 'Chel 2', id: '3'},
    ]

    return (
    <div className={classes.dialog}>
        <div className={classes.dialog__container}>
            <div className={classes.dialog__friends}>
                <div className={classes.dialog__friends_title}>
                    Friends
                </div>
                <div className={classes.dialog__friends_list}>
                    <Friend name='Chel 0' id='1'/> 
                    <Friend name='Chel 1' id='2'/> 
                    <Friend name='Chel 2' id='3'/> 
                </div>
            </div>
            <div className={classes.dialog__messages}>
                <div className={classes.dialog__messages_title}>
                    Messages
                </div>
                <div className={classes.dialog__messages_list}>
                    <Message message='Hi'/>
                    <Message message='Bruh'/>
                    <Message message='Wtb'/>
                    <Message message='Egzi'/>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Dialogs