import React from "react";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  const onPhotoUpload = (photo) => {
    if (photo.target.files.length) {
      props.uploadPhoto(photo.target.files[0]);
    }
  };

  let isAuth = props.userId === props.loggedUser;

  return (
    <div>
      <img src={props.userPhoto} alt="user" />
      {isAuth && <input type="file" onChange={onPhotoUpload} />}
      <ProfileInfo
        status={props.status}
        setUserStatus={props.setUserStatus}
        isAuth={isAuth}
      />
      <h2>{props.userName}</h2>
    </div>
  );
};

export default Profile;
