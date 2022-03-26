import {profileReducer} from './myPosts-reducer';
import {messagesReducer} from './messages-reducer';


let store = {
    _callSubscriber() {
        console.log('State wtf')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; // observer (pattern)
    },

    _state: {
        profilePage: {
            postsData: [
                {id: '0', message: 'Hi, amogus', likesCount: 0},
                {id: '1', message: 'Hardcoding', likesCount: 16},
            ],
            newPostText: '',
        },
        messagesPage: {
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
        },
        sidebar: {},
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    },
};

export default store;