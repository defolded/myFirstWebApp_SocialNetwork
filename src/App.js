import "./App.css";
import MessagesContainer from "./components/Messages/MessagesContainer";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/Login/LoginContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarContainer store={props.store} />
        <div className="Content">
          <div className="Wrapper">
            <Routes>
              <Route
                path="/posts"
                element={<MyPostsContainer store={props.store} />}
              />
              <Route
                path="/messages/*"
                element={<MessagesContainer store={props.store} />}
              />
              <Route
                path="/users"
                element={<UsersContainer store={props.store} />}
              />
              <Route
                path="/login"
                element={<LoginContainer store={props.store} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
