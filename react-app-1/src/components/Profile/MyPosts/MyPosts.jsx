import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {

    let postsElements = props.postsData.map(po => <Post message={po.message}/>);

    let addPost = () => {
        alert('Amogus');
    }

    return (
    <div className='profile__container'>
        <div className='myPosts'>My posts</div>
        <input type="text" />
        <div className={classes.profile__button}>
            <button onClick={addPost} className={classes.profile__button_button}>Send</button>
        </div>
        {postsElements}
    </div>
    );
  };
  
  export default MyPosts