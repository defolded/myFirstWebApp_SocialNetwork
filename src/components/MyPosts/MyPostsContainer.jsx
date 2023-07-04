import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../redux/postsReducer";

const MyPostsContainer = (props) => {
  const addPost = () => props.store.dispatch(addPostActionCreator());

  let onPostChange = (text) =>
    props.store.dispatch(onPostChangeActionCreator(text));

  return (
    <MyPosts
      addPost={addPost}
      updateText={onPostChange}
      state={props.store.getState().posts}
      newPostText={props.store.getState().posts}
    />
  );
};

export default MyPostsContainer;
