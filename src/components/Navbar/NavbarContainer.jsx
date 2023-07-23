import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { getAuthUserData, logout } from "../../redux/authReducer";
import { compose } from "redux";

class NavbarContainer extends React.Component {
  render() {
    return (
      <Navbar
        isAuth={this.props.isAuth}
        login={this.props.login}
        logout={this.props.logout}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(connect(mapStateToProps, { getAuthUserData, logout }))(
  NavbarContainer
);
