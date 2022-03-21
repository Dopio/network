import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {

    let postsElements = props.postsData.map(po => <Post message={po.message}/>);

    let addPosts = () => {
        /* props.addPost(); */
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        /* props.updateNewPostText(text); */
        props.dispatch ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    };

    let newPostElement = React.createRef();


    return (
    <div className='profile__container'>
        <div className='myPosts'>My posts</div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <div className={classes.profile__button}>
            <button onClick={addPosts} className={classes.profile__button_button}>Send</button>
        </div>
        {postsElements}
    </div>
    );
  };
  
  export default MyPosts