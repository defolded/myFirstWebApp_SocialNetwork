import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/profile-picture.jpg";
import User from "./User";
import Profile from "./Profile";

const Users = (props) => {
  const followUser = (userId) => {
    props.follow(userId);
  };

  const unfollowUser = (userId) => {
    props.unfollow(userId);
  };

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

  if (!props.profile) {
    return <></>;
  }

  return (
    <div>
      <Profile
        userPhoto={props.profile.photos.small}
        userName={props.profile.fullName}
      />
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
          isFetching={props.isFetching}
        />
      ))}
    </div>
  );
};

export default Users;
