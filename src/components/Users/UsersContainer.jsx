import {
  setProfile,
  toggleIsFetching,
  getUsers,
  follow,
  unfollow,
  getProfile,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.state.currentPage,
      this.props.state.pageSize
    );

    this.props.getProfile(2);
  }

  setCurrentPage = (currentPage) => {
    this.props.getUsers(currentPage, this.props.state.pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.state.users}
        setCurrentPage={this.setCurrentPage}
        totalUsersCount={this.props.state.totalUsersCount}
        pageSize={this.props.state.pageSize}
        currentPage={this.props.state.currentPage}
        profile={this.props.state.profile}
        toggleIsFetching={this.props.toggleIsFetching}
        isFetching={this.props.state.isFetching}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.users,
    pageSize: state.pageSize,
    totalUsersCount: state.totalUsersCount,
    currentPage: state.currentPage,
    profile: state.profile,
    isFetching: state.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, {
    setProfile,
    toggleIsFetching,
    getUsers,
    follow,
    unfollow,
    getProfile,
  }),
  withAuthRedirect
)(UsersAPIComponent);
