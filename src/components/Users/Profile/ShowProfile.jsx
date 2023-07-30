import React from "react";
import ProfileInfo from "./ProfileInfo";
import styles from "./Profile.module.css";
import SocialMediaIcons from "./SocialMediaIcons";

const ShowProfile = (props) => {
  return (
    <div>
      {props.isAuth && (
        <div className={styles.editContainer}>
          <button onClick={props.toggleEditMode} className={styles.editBtn}>
            Edit profile
          </button>
        </div>
      )}
      <div className={styles.headingContainer}>
        <img src={props.userPhotoLarge} alt="user" />
        <div className={styles.fullName}>
          <h1>{props.userName}</h1>
          <div
            className={props.lookingForAJob ? styles.greenDot : styles.redDot}
          />
        </div>
        {/* <ProfileInfo
          editBtnState={props.editMode}
          status={props.status}
          setUserStatus={props.setUserStatus}
          isAuth={isAuth}
        /> */}
      </div>
      <div className={styles.aboutMeContainer}>
        <h2>About me</h2>
        <p className={props.aboutMe ? "" : styles.empty}>
          {props.aboutMe} {props.lookingForAJobDescription}
        </p>
      </div>
      {/* <SocialMediaIcons /> */}
    </div>
  );
};

export default ShowProfile;
