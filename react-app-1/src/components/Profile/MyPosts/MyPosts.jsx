import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {

    let postsElements = props.postsData.map(po => <Post message={po.message}/>);

    let addPosts = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    let newPostElement = React.createRef();


    return (
    <div className='profile__container'>
        <div className='myPosts'>My posts</div>
        <input type="text" ref={newPostElement}/>
        <div className={classes.profile__button}>
            <button onClick={addPosts} className={classes.profile__button_button}>Send</button>
        </div>
        {postsElements}
    </div>
    );
  };
  
  export default MyPosts