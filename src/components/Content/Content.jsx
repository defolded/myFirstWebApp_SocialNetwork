import React from "react";
import styles from "./Content.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <MyPosts />
      </div>
    </div>
  );
};

export default Content;
