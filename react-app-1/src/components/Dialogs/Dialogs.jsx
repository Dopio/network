import React from 'react';
import classes from './Dialogs.module.css';
import FriendDialoge from './Friend/Friend';
import Message from './Message/Message';
import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/state';


const Dialogs = (props) => {
    
    let friendsElements = props.messagesPage.dialogsData.map(dialog => 
        <FriendDialoge name={dialog.name} id={dialog.id}
    />);
    let messagesElements = props.messagesPage.messagesData.map(mes =>
        <Message message={mes.message}
    />);

    let addMessages = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = onMessageChangeActionCreator(text);
        props.dispatch (action);
    };


    let newMessageElement = React.createRef();

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
                <div  className={classes.messages__input}>
                    <textarea
                        onChange={onMessageChange}
                        ref={newMessageElement}
                        value={props.newMessageText}
                        className={classes.messages__textarea}
                    />
                    <button onClick={addMessages} className={classes.messages__button}>Send</button>
                </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default Dialogs