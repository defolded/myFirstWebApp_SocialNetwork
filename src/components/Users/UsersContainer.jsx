import {
  setProfile,
  toggleIsFetching,
  getUsers,
  follow,
  unfollow,
  getProfile,
  getUserStatus,
  setUserStatus,
  uploadPhoto,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.state.page, this.props.state.pageSize);

    this.props.getProfile(this.props.myProfile);
    this.props.getUserStatus(this.props.myProfile);
  }

  setCurrentPage = (page) => {
    this.props.getUsers(page, this.props.state.pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.state.users}
        setCurrentPage={this.setCurrentPage}
        totalUsersCount={this.props.state.totalUsersCount}
        pageSize={this.props.state.pageSize}
        page={this.props.state.page}
        profile={this.props.state.profile}
        toggleIsFetching={this.props.toggleIsFetching}
        isFetching={this.props.state.isFetching}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        status={this.props.state.status}
        setUserStatus={this.props.setUserStatus}
        uploadPhoto={this.props.uploadPhoto}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state: state.users,
    pageSize: state.pageSize,
    totalUsersCount: state.totalUsersCount,
    page: state.page,
    profile: state.profile,
    isFetching: state.isFetching,
    status: state.status,
    myProfile: state.auth.userId,
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
    getUserStatus,
    setUserStatus,
    uploadPhoto,
  }),
  withAuthRedirect
)(UsersAPIComponent);
