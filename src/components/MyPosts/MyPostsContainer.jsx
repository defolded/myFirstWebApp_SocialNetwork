import MyPosts from "./MyPosts";
import { addPost, onPostChange } from "../../redux/postsReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.posts,
    newPostText: state.posts.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPost()),
    updateText: (text) => dispatch(onPostChange(text)),
  };
};

const SuperMyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default SuperMyPostsContainer;
