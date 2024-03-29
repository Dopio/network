import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import required, { maxLengthCreator } from '../../../utils/validators/validator';
import {TextArea} from '../../common/FormsControls/FormsControls';

const maxLenght = maxLengthCreator(10);

const MyPosts = React.memo(({postsData, addPosts}) => {

    let postsElements = postsData.map(po => <Post message={po.message} key={po.id} />);

    let addNewPost = (values) => {
        addPosts(values.newPostBody);
    };

    return (
        <div className='profile__container'>
            <div className='myPosts'>My posts</div>
            <AddPostFormRedux onSubmit={addNewPost} />
            {postsElements}
        </div>
    );
});

const addPostForm = React.memo(({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={classes.writePost__container}>
            <div className={classes.writePost__textArea}>
                <Field
                    component={TextArea}
                    name='newPostBody'
                    validate={[required, maxLenght]}
                    label="Write your post"
                />
            </div>
            <button className={classes.writePost_button}>Send</button>
        </form>
    );
});

const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(addPostForm);

export default MyPosts;