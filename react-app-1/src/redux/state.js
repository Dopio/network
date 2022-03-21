let rerenderEntireTree = () => {
    console.log('State wtf')
};

let state = {
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
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addPost = () => {
    let newPost = {id: 2, message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const addMessage = (dialogMessage) => {
    let newMessage = {message: dialogMessage, id: '4'};
    state.messagesPage.messagesData.push(newMessage);
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // observer (pattern)
};

export default state;