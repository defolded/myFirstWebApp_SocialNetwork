import React from "react";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const onPhotoUpload = (photo) => {
    if (photo.target.files.length) {
      props.uploadPhoto(photo.target.files[0]);
    }
  };

  return (
    <div>
      <div>
        <img src={props.userPhoto} alt="user" />
        <input type="file" onChange={onPhotoUpload} />
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
