import React from "react";

const User = (props) => {
  return (
    <div>
      <img src={props.profilePicture} height="80" width="80" alt="profile" />
      <h3>{props.username}</h3>
      {props.isFollowed ? (
        <button onClick={() => props.unfollowUser(props.userId)}>
          Unfollow
        </button>
      ) : (
        <button onClick={() => props.followUser(props.userId)}>Follow</button>
      )}
      <p>{props.message}</p>
      <br />
      <br />
      <br />
    </div>
  );
};

export default User;
