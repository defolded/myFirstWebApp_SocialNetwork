import React from "react";
import styles from "./MyPost.module.css";

const MyPost = (props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default MyPost;
