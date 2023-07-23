import React from "react";
import "./App.css";
import MessagesContainer from "./components/Messages/MessagesContainer";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.init) {
      return <h3>hey</h3>;
    }

    return (
      <BrowserRouter>
        <div className="App">
          <NavbarContainer store={this.props.store} />
          <div className="Content">
            <div className="Wrapper">
              <Routes>
                <Route
                  path="/posts"
                  element={<MyPostsContainer store={this.props.store} />}
                />
                <Route
                  path="/messages/*"
                  element={<MessagesContainer store={this.props.store} />}
                />
                <Route
                  path="/users"
                  element={<UsersContainer store={this.props.store} />}
                />
                <Route
                  path="/login"
                  element={<LoginContainer store={this.props.store} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  init: state.app.init,
});

export default compose(connect(mapStateToProps, { initializeApp })(App));
