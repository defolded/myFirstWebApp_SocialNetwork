import "./App.css";
import MessagesContainer from "./components/Messages/MessagesContainer";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
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
                path="/users/*"
                element={<UsersContainer store={props.store} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
