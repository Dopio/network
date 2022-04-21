const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    messagesData: [
        { id: '0', message: 'Hi' },
        { id: '1', message: 'Bruh' },
        { id: '2', message: 'Wtb' },
        { id: '3', message: 'Egzi' },
    ],
    dialogsData: [
        { name: 'Chel 0', id: '1' },
        { name: 'Chel 1', id: '2' },
        { name: 'Chel 2', id: '3' },
    ],
};

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: '0', message: newMessage }]
            };
        default:
            return state;
    };
};

export const sendMessageActionCreator = (newMessageBody) =>
    ({ type: SEND_MESSAGE, newMessageText: newMessageBody});