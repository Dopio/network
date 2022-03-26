import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {

    let postsElements = props.postsData.map(po => <Post message={po.message} key={po.id}/>);

    let onAddPosts = () => {
        props.addPosts();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };


    let newPostElement = React.createRef();

    return (
    <div className='profile__container'>
        <div className='myPosts'>My posts</div>
        <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
        />
        <div className={classes.profile__button}>
            <button onClick={onAddPosts} className={classes.profile__button_button}>Send</button>
        </div>
        {postsElements}
    </div>
    );
  };
  
  export default MyPosts