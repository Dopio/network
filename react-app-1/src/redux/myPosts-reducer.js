const SEND_POST = 'SEND-POST';
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
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }

        }
        case SEND_POST: {
            let newPost = state.newPostText;
            return{
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {id: 2, message: newPost, likesCount: 0}],
            }
        }
        default:
            return state;
    };
};

export const addPostActionCreator = () => ({type: SEND_POST})
export const onPostChangeActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})