import { addPostActionCreator, onPostChangeActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
  

let mapStateToProps = (state) => {
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return{
        addPosts: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text));
        }
    };
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;