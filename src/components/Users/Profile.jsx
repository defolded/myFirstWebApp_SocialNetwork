import React from "react";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <div>
        <img src={props.userPhoto} alt="user" />
        <ProfileInfo
          status={props.status}
          setUserStatus={props.setUserStatus}
        />
        <h2>{props.userName}</h2>
      </div>
    </div>
  );
};

export default Profile;
