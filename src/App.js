import "./App.css";
import Messages from "./components/Messages/Messages";
import MyPosts from "./components/MyPosts/MyPosts";
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
                element={
                  <MyPosts
                    state={props.state.posts}
                    dispatch={props.dispatch}
                  />
                }
              />
              <Route
                path="/messages/*"
                element={
                  <Messages
                    state={props.state.messages}
                    dispatch={props.dispatch}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
