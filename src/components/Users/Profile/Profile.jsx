import React, { useState } from "react";

import EditProfile from "./EditProfile";
import ShowProfile from "./ShowProfile";

const Profile = (props) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  let isAuth = props.userId === props.loggedUser;

  const onSubmit = (formData) => {
    props.sendProfile(formData).then(() => toggleEditMode());
  };

  return (
    <div>
      {editMode ? (
        <EditProfile
          editMode={editMode}
          toggleEditMode={toggleEditMode}
          isAuth={isAuth}
          userPhotoLarge={props.userPhotoLarge}
          userName={props.userName}
          aboutMe={props.aboutMe}
          lookingForAJobDescription={props.lookingForAJobDescription}
          onSubmit={onSubmit}
        />
      ) : (
        <ShowProfile
          editMode={editMode}
          toggleEditMode={toggleEditMode}
          isAuth={isAuth}
          userPhotoLarge={props.userPhotoLarge}
          userName={props.userName}
          aboutMe={props.aboutMe}
          lookingForAJobDescription={props.lookingForAJobDescription}
        />
      )}
    </div>
  );
};

export default Profile;
