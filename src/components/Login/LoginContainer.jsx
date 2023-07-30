import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";

class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} captchaURL={this.props.captchaURL} />;
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.auth,
    captchaURL: state.auth.captchaURL,
  };
};

export default connect(mapStateToProps, { login })(LoginContainer);
