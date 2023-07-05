import React from "react";
import styles from "./Messages.module.css";
import MyMessage from "./MyMessage/MyMessage";
import Person from "./Person/Person";
import b from "../.././Button.module.css";

const Messages = (props) => {
  let newMessageElement = React.createRef();

  const addMessage = () => props.addMessage();

  let onMessageChange = () => props.updateText(newMessageElement.current.value);

  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <div className={styles.dialogs}>
          {props.state.dialogs.map((p) => (
            <Person id={p.id} name={p.name} key={p.id} />
          ))}
        </div>
        <div className={styles.messages}>
          {props.state.messages.map((m) => (
            <MyMessage text={m.message} key={m.id} />
          ))}
        </div>
      </div>
      <div className={b.userInput}>
        <textarea
          ref={newMessageElement}
          onChange={onMessageChange}
          value={props.state.newMessageText}
          className={b.text}
        ></textarea>
        <button onClick={addMessage} className={b.btn}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Messages;
