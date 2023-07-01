import React from "react";
import styles from "./Messages.module.css";
import MyMessage from "./MyMessage/MyMessage";
import Person from "./Person/Person";

const Messages = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.dialogs}>
        {props.dialogs.map((p) => (
          <Person id={p.id} name={p.name} />
        ))}
      </div>
      <div className={styles.wrapper}>
        {props.messages.map((m) => (
          <MyMessage text={m.message} />
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

export default Messages;
