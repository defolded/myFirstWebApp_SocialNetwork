import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/profile-picture.jpg";
import User from "./User";

const Users = (props) => {
  const followUser = (userId) => {
    props.followUser(userId);
  };

  const unfollowUser = (userId) => {
    props.unfollowUser(userId);
  };

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
              className={props.currentPage === page ? styles.selectedPage : ""}
              onClick={() => {
                props.setCurrentPage(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
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
          followUser={followUser}
          unfollowUser={unfollowUser}
          userId={user.id}
        />
      ))}
    </div>
  );
};

export default Users;
