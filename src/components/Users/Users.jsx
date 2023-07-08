import React from "react";
import styles from "./Users.module.css";
import User from "./User";

const Users = (props) => {
  const followUser = (userId) => props.followUser(userId);
  const unfollowUser = (userId) => props.unfollowUser(userId);

  window.state = props.state.users;
  return (
    <div>
      {props.state.users.map((user) => (
        <User
          profilePicture={user.profilePicture}
          username={user.username}
          isFollowed={user.isFollowed}
          message={user.message}
          followUser={followUser}
          unfollowUser={unfollowUser}
          userId={user.id}
        />
      ))}
    </div>
  );
};

export default Users;
