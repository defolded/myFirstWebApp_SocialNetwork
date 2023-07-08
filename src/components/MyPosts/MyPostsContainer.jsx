import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../redux/postsReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.posts,
    newPostText: state.posts.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateText: (text) => dispatch(onPostChangeActionCreator(text)),
  };
};

const SuperMyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default SuperMyPostsContainer;
