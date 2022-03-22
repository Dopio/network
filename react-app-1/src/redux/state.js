const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _callSubscriber() {
        console.log('State wtf')
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
                {message: 'Hi', id: '0'},
                {message: 'Bruh', id: '1'},
                {message: 'Wtb', id: '2'},
                {message: 'Egzi', id: '3'},
            ],
            dialogsData: [
                {name: 'Chel 0', id: '1'},
                {name: 'Chel 1', id: '2'},
                {name: 'Chel 2', id: '3'},
            ],
        },
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; // observer (pattern)
    },

    addMessage(dialogMessage) {
        let newMessage = {message: dialogMessage, id: '4'};
        this._state.messagesPage.messagesData.push(newMessage);
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {id: 2, message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};


export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;