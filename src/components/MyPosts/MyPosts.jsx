import React from "react";
import styles from "./MyPosts.module.css";
import MyPost from "./SinglePost/SinglePost";
import b from "../.././Button.module.css";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  const addPost = () => props.addPost();

  let onPostChange = () => props.updateText(newPostElement.current.value);
  return (
    <div className={styles.wrapper}>
      <div className={styles.postsList}>
        {props.state.posts.map((p) => (
          <MyPost
            profilePicture={p.profilePicture}
            username={p.username}
            text={p.message}
            key={p.id}
          />
        ))}
      </div>
      <div className={b.userInput}>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.state.newPostText}
          className={b.text}
        />
        <button onClick={addPost} className={b.btn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MyPosts;
