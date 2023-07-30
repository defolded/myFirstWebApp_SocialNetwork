import React from "react";
import styles from "./Profile.module.css";
import SocialMediaIcons from "./SocialMediaIcons";
import { Field, reduxForm } from "redux-form";

const EditProfile = (props) => {
  const onPhotoUpload = (photo) => {
    if (photo.target.files.length) {
      props.uploadPhoto(photo.target.files[0]);
    }
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.editContainer}>
        <button className={styles.editBtn}>Save</button>
        {props.error && <h3>{props.error}</h3>}
        {/* <button className={styles.editBtn}>Exit</button> */}
      </div>
      <div className={styles.headingContainer}>
        <img src={props.userPhotoLarge} alt="user" />
        <input type="file" onChange={onPhotoUpload} />
        <div className={styles.fullName}>
          <Field placeholder="Name" name="fullName" component="input" />
          <div>
            <Field name="lookingForAJob" component="input" type="checkbox" />
          </div>
        </div>
        {/* <ProfileInfo
          editBtnState={editMode}
          status={props.status}
          setUserStatus={props.setUserStatus}
          isAuth={isAuth}
        /> */}
      </div>
      <div className={styles.aboutMeContainer}>
        <h2>About me</h2>
        <Field placeholder="About Me" name="aboutMe" component="input" />{" "}
        <Field
          placeholder="Skills description"
          name="lookingForAJobDescription"
          component="input"
        />
      </div>
      {/* <SocialMediaIcons /> */}
    </form>
  );
};

const EditProfileWithForm = reduxForm({
  form: "edit-profile",
})(EditProfile);

export default EditProfileWithForm;
