import React from "react";
import styles from "./MyPosts.module.css";
import MyPost from "./MyPost/MyPost";

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <MyPost text="Some simple text." />
    </div>
  );
};

export default MyPosts;
