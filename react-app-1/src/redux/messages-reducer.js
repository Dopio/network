const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    messagesData: [
        {id: '0', message: 'Hi'},
        {id: '1', message: 'Bruh'},
        {id: '2', message: 'Wtb'},
        {id: '3', message: 'Egzi'},
    ],
    newMessageText: '',
    dialogsData: [
        {name: 'Chel 0', id: '1'},
        {name: 'Chel 1', id: '2'},
        {name: 'Chel 2', id: '3'},
    ],
};

export const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newText
            }

        case SEND_MESSAGE: 
            let newMessage = state.newMessageText;
            return{
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: '0', message: newMessage}]
            };
        default:
            return state;
    };
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const onMessageChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})