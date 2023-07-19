import React from "react";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div>
      <NavLink to={`users/${props.userId}`}>
        <img src={props.profilePicture} height="80" width="80" alt="profile" />
      </NavLink>
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
