import React from "react";
import styles from "./MyPosts.module.css";
import MyPost from "./SinglePost/SinglePost";

const MyPosts = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.posts}>
          <MyPost text="Post 1: Some simple text." />
          <MyPost text="Post 2: Another simple text." />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
