import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {  

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPosts = () => {
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text) => {
                    let action = onPostChangeActionCreator(text);
                    store.dispatch(action);
                };

                return (
                    <MyPosts 
                        addPosts={addPosts}
                        updateNewPostText={onPostChange}
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}/>
                );
            }
        }
        </StoreContext.Consumer>
    );
  };
  
  export default MyPostsContainer;