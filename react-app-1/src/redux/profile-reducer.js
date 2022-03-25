const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postsData: [
        {id: '0', message: 'Hi, amogus', likesCount: 0},
        {id: '1', message: 'Hardcoding', likesCount: 16},
    ],
    newPostText: '',
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {id: 2, message: state.newPostText, likesCount: 0};
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    };
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const onPostChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})