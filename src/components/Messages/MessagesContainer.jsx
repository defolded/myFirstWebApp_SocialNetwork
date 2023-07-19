import Messages from "./Messages";
import { addMessage, onMessageChange } from "../../redux/messagesReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.messages,
    newMessageText: state.messages.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessage()),
    updateText: (text) => dispatch(onMessageChange(text)),
  };
};

const SuperMessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default SuperMessagesContainer;
