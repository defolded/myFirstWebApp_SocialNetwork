import Messages from "./Messages";
import { addMessage, onMessageChange } from "../../redux/messagesReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
