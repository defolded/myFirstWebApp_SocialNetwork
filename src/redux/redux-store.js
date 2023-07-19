import { combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  posts: postsReducer,
  messages: messagesReducer,
  users: usersReducer,
});

let store = createStore(reducers);

window.store = store;
export default store;
