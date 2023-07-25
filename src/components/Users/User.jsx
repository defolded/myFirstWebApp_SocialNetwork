import React from "react";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div key={props.userId}>
      <NavLink to={`/users/${props.userId}`}>
        <img src={props.profilePicture} height="80" width="80" alt="profile" />
      </NavLink>
      <h3>{props.username}</h3>
      {props.isFollowed ? (
        <button
          disabled={props.isFetching.some((id) => id === props.userId)}
          onClick={() => {
            props.unfollowUser(props.userId);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={props.isFetching.some((id) => id === props.userId)}
          onClick={() => {
            props.followUser(props.userId);
          }}
        >
          Follow
        </button>
      )}
      <p>{props.message}</p>
      <br />
      <br />
      <br />
    </div>
  );
};

export default User;
