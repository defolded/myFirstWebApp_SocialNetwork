const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Davos" },
    { id: 2, name: "Tommen" },
    { id: 3, name: "Doran" },
    { id: 4, name: "TestTestTest" },
  ],

  messages: [
    { id: 1, message: "Otdai kingdom" },
    { id: 2, message: "Ne dam" },
    { id: 3, message: "Dai" },
    { id: 4, message: "Ne" },
  ],
  newMessageText: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.text };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const onMessageChangeActionCreator = (textValue) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: textValue,
});

export default messagesReducer;
