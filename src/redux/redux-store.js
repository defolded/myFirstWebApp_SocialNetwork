import { combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import messagesReducer from "./messagesReducer";

let reducers = combineReducers({
  posts: postsReducer,
  messages: messagesReducer,
});

let store = createStore(reducers);

export default store;
