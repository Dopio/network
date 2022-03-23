import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { addPostActionCreator, onPostChangeActionCreator} from '../../../redux/state';


const MyPosts = (props) => {

    let postsElements = props.postsData.map(po => <Post message={po.message}/>);

    let addPosts = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onPostChangeActionCreator(text);
        props.dispatch (action);
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
            <button onClick={addPosts} className={classes.profile__button_button}>Send</button>
        </div>
        {postsElements}
    </div>
    );
  };
  
  export default MyPosts