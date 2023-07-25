import { applyMiddleware, combineReducers, createStore } from "redux";
import postsReducer from "./postsReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
  posts: postsReducer,
  messages: messagesReducer,
  users: usersReducer,
  auth: authReducer,
  app: appReducer,
  profile: profileReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.state = store;

export default store;
