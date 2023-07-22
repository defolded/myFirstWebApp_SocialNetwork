const ADD_MESSAGE = "ADD_MESSAGE";

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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: action.text,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export const addMessage = (text) => ({ type: ADD_MESSAGE, text });

export default messagesReducer;
