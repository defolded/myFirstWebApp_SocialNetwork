import React from "react";

const Profile = (props) => {
  return (
    <div>
      <div>
        <img src={props.userPhoto} alt="user" />
        <h2>{props.userName}</h2>
      </div>
    </div>
  );
};

export default Profile;
