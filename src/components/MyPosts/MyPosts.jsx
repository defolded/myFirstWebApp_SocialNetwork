import React from "react";
import styles from "./MyPosts.module.css";
import MyPost from "./SinglePost/SinglePost";

const MyPosts = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.posts}>
        {props.posts.map((p) => (
          <MyPost
            profilePicture={p.profilePicture}
            username={p.username}
            text={p.message}
          />
        ))}
      </div>
      <div className={styles.userInput}>
        <textarea className={styles.text}></textarea>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MyPosts;
