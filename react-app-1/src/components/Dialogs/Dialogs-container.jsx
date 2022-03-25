import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/messages-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessages = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        let action = onMessageChangeActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs 
            addMessages={addMessages}
            updateNewMessageText={onMessageChange}
            dialogsData={state.messagesPage.dialogsData}
            newMessageText={state.messagesPage.newMessageText}
            messagesData={state.messagesPage.messagesData}
        />
    );
  };
  
  export default DialogsContainer;