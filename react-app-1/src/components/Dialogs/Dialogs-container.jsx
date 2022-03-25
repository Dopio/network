import React from 'react';
import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{(store) => {
                let state = store.getState();
                let addMessages = () => {
                    store.dispatch(addMessageActionCreator());
                };
                let onMessageChange = (text) => {
                    let action = onMessageChangeActionCreator(text);
                    store.dispatch(action);
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
            }
        }
        </StoreContext.Consumer>
    );
  };
  
  export default DialogsContainer;