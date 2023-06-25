import React from "react";
import styles from "./Content.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Content = () => {
  return (
    <div className={styles.content}>
      <container className={styles.wrapper}>
        <MyPosts />
      </container>
    </div>
  );
};

export default Content;
