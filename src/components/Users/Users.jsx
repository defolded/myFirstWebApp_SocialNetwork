import React from "react";
import styles from "./Users.module.css";
import User from "./User";
import axios from "axios";
import userPhoto from "../../assets/profile-picture.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  }

  followUser = (userId) => {
    this.props.followUser(userId);
  };
  unfollowUser = (userId) => {
    this.props.unfollowUser(userId);
  };

  render() {
    return (
      <div>
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
