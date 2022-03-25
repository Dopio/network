const ADD_MESSAGE = 'ADD-MESSAGE';
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
        case ADD_MESSAGE:
            let newMessage = {id: '0', message: state.newMessageText};
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    };
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onMessageChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})