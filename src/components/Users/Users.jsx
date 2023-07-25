import React from "react";
import userPhoto from "../../assets/profile-picture.jpg";
import User from "./User";
import Paginator from "./Paginator";

const Users = (props) => {
  const followUser = (userId) => {
    props.follow(userId);
  };

  const unfollowUser = (userId) => {
    props.unfollow(userId);
  };

  return (
    <div>
      <Paginator
        page={props.page}
        setCurrentPage={props.setCurrentPage}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />

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
          key={user.id}
        />
      ))}
    </div>
  );
};

export default Users;
