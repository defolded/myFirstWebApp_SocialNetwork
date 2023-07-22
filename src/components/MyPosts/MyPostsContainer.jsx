import MyPosts from "./MyPosts";
import { addPost } from "../../redux/postsReducer";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.posts,
  };
};

export default compose(connect(mapStateToProps, { addPost }))(MyPosts);
