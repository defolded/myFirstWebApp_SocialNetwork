import React from "react";
import Messages from "./Messages";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/messagesReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.messages,
    newMessageText: state.messages.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateText: (text) => dispatch(onMessageChangeActionCreator(text)),
  };
};

const SuperMessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default SuperMessagesContainer;
