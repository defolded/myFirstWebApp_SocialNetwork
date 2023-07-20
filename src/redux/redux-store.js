import { applyMiddleware, combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  posts: postsReducer,
  messages: messagesReducer,
  users: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.state = store;
export default store;
