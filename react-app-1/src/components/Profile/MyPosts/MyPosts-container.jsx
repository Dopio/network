import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {  
    let state = props.store.getState()

    let addPosts = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts 
            addPosts={addPosts}
            updateNewPostText={(onPostChange)}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    );
  };
  
  export default MyPostsContainer;