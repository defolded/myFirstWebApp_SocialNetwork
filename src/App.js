import "./App.css";
import styles from "./Button.module.css";
import Messages from "./components/Messages/Messages";
import MyPosts from "./components/MyPosts/MyPosts";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import state from "./redux/state";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Content">
          <div className="Wrapper">
            <Routes>
              <Route
                path="/posts"
                element={<MyPosts posts={state.posts.posts} />}
              />
              <Route
                path="/messages/*"
                element={
                  <Messages
                    dialogs={state.messages.dialogs}
                    messages={state.messages.messages}
                  />
                }
              />
            </Routes>
          </div>
          <div className={styles.userInput}>
            <textarea className={styles.text}></textarea>
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
