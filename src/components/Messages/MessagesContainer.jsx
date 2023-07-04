import React from "react";
import Messages from "./Messages";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/messagesReducer";

const MessagesContainer = (props) => {
  const addMessage = () => props.store.dispatch(addMessageActionCreator());

  let onMessageChange = (text) =>
    props.store.dispatch(onMessageChangeActionCreator(text));

  return (
    <Messages
      addMessage={addMessage}
      updateText={onMessageChange}
      state={props.store.getState().messages}
      newMessageText={props.store.getState().messages}
    />
  );
};

export default MessagesContainer;
