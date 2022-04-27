const SEND_MESSAGE = 'messages/SEND-MESSAGE';


let initialState = {
    messagesData: [
        { id: '0', message: 'Hi' },
        { id: '1', message: 'Thats' },
        { id: '2', message: 'Some' },
        { id: '3', message: 'Messages' },
    ],
    dialogsData: [
        { name: 'AlexSunder', id: '1' },
        { name: 'Daniil', id: '2' },
        { name: 'Izrail', id: '3' },
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