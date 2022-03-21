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

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addPost() {
        let newPost = {id: 2, message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    addMessage(dialogMessage) {
        let newMessage = {message: dialogMessage, id: '4'};
        this._state.messagesPage.messagesData.push(newMessage);
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer; // observer (pattern)
    },
};

export default store;