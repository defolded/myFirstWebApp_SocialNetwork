import {
  followUser,
  setCurrentPage,
  setUsers,
  unfollowUser,
  setTotalUsersCount,
  setProfile,
} from "../../redux/usersReducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((res) => {
        this.props.setProfile(res.data);
      });
  }

  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.state.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    return (
      <Users
        users={this.props.state.users}
        setCurrentPage={this.setCurrentPage}
        totalUsersCount={this.props.state.totalUsersCount}
        pageSize={this.props.state.pageSize}
        currentPage={this.props.state.currentPage}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
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
  };
};

const SuperUsersContainer = connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setProfile,
})(UsersAPIComponent);

export default SuperUsersContainer;
