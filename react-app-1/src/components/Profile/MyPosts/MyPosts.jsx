import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {

    let postsElements = props.postsData.map(po => <Post message={po.message} key={po.id} />);

    let addNewPost = (values) => {
        props.addPosts(values.newPostBody)
    };

    return (
        <div className='profile__container'>
            <div className='myPosts'>My posts</div>
            <AddPostFormRedux onSubmit={addNewPost}/>
            {postsElements}
        </div>
    );
};

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.profile__button}>
            <Field component='textarea' name='newPostBody' placeholder='Enter your post'/>
            <button className={classes.profile__button_button}>Send</button>
        </form>
    );
};

const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(addPostForm);

export default MyPosts;