import React from "react";
import styles from "./Users.module.css";
import User from "./User";
import axios from "axios";
import userPhoto from "../../assets/profile-picture.jpg";

class Users extends React.Component {
  componentDidMount() {
    window.state = this.props.state;

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  followUser = (userId) => {
    this.props.followUser(userId);
  };
  unfollowUser = (userId) => {
    this.props.unfollowUser(userId);
  };

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
    let pageCount = Math.ceil(
      this.props.state.totalUsersCount / this.props.state.pageSize
    );

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
      if (pages.length < 10) {
        pages.push(i);
      }
    }

    return (
      <div>
        <div>
          {pages.map((page) => {
            return (
              <span
                className={
                  this.props.currentPage === page ? styles.selectedPage : ""
                }
                onClick={() => {
                  this.setCurrentPage(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>

        {this.props.state.users.map((user) => (
          <User
            profilePicture={
              user.profilePicture
                ? user.profilePicture
                : user.photos.small === null
                ? userPhoto
                : user.photos.small
            }
            username={user.username ? user.username : user.name}
            isFollowed={user.isFollowed ? user.isFollowed : user.followed}
            message={user.message ? user.message : user.status}
            followUser={this.followUser}
            unfollowUser={this.unfollowUser}
            userId={user.id}
          />
        ))}
      </div>
    );
  }
}
export default Users;
