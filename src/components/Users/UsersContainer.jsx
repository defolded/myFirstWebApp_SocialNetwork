import {
  toggleIsFetching,
  getUsers,
  follow,
  unfollow,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.state.page, this.props.state.pageSize);
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
        toggleIsFetching={this.props.toggleIsFetching}
        isFetching={this.props.state.isFetching}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        isFetchingUsersPage={this.props.isFetchingUsersPage}
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
    isFetching: state.isFetching,
    isFetchingUsersPage: state.users.isFetchingUsersPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    toggleIsFetching,
    getUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersAPIComponent);
