import { addPostActionCreator, deletePost, profileReducer } from "./profile-reducer";

let state = {
    postsData: [
        { id: '0', message: 'Hi, amogus', likesCount: 0 },
        { id: '1', message: 'Hardcoding', likesCount: 16 },
    ],
};

test('new post should be added', () => {
    let action = addPostActionCreator('Hellow all!')

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
});

test('new post message must be: Hellow all!', () => {
    let action = addPostActionCreator('Hellow all!')

    let newState = profileReducer(state, action);
    expect(newState.postsData[2].message).toBe('Hellow all!')
});

test('length after deleting post should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(1)
});