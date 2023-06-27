import React from "react";
import styles from "./Messages.module.css";
import MyMessage from "./MyMessage/MyMessage";

const Messages = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div>
          <MyMessage text="asd" />
        </div>
      </div>
    </div>
  );
};

export default Messages;
