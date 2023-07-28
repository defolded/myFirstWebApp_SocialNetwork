import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import styles from "./Profile.module.css";
import { IconContext } from "react-icons";
import { SlSocialVkontakte } from "react-icons/sl";
import {
  BsFacebook,
  BsLink45Deg,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsGithub,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onPhotoUpload = (photo) => {
    if (photo.target.files.length) {
      props.uploadPhoto(photo.target.files[0]);
    }
  };

  let isAuth = props.userId === props.loggedUser;

  return (
    <div>
      {isAuth && (
        <div className={styles.editContainer}>
          <button onClick={toggleEditMode} className={styles.editBtn}>
            {editMode ? "Save" : "Edit profile"}
          </button>
        </div>
      )}
      <div className={styles.headingContainer}>
        <img src={props.userPhotoLarge} alt="user" />
        {editMode && <input type="file" onChange={onPhotoUpload} />}
        <div className={styles.fullName}>
          <h1>{props.userName}</h1>
          <div
            className={props.lookingForAJob ? styles.greenDot : styles.redDot}
          ></div>
        </div>
        <ProfileInfo
          editBtnState={editMode}
          status={props.status}
          setUserStatus={props.setUserStatus}
          isAuth={isAuth}
        />
      </div>
      <div className={styles.aboutMeContainer}>
        <h2>About me</h2>
        <p className={props.aboutMe ? "" : styles.empty}>
          {props.aboutMe} {props.lookingForAJobDescription}
        </p>
      </div>
      <IconContext.Provider value={{ color: "black", size: "1.4em" }}>
        <div className={styles.contacts}>
          <Link
            to={{ pathname: props.contacts.facebook }}
            target="_blank"
            className={props.contacts.facebook ? "" : styles.empty}
          >
            <BsFacebook />
          </Link>
          <Link
            to={{ pathname: props.contacts.website }}
            target="_blank"
            className={props.contacts.website ? "" : styles.empty}
          >
            <BsLink45Deg />
          </Link>
          <Link
            to={{ pathname: props.contacts.vk }}
            target="_blank"
            className={props.contacts.vk ? "" : styles.empty}
          >
            <SlSocialVkontakte />
          </Link>
          <Link
            to={{ pathname: props.contacts.twitter }}
            target="_blank"
            className={props.contacts.twitter ? "" : styles.empty}
          >
            <BsTwitter />
          </Link>
          <Link
            to={{ pathname: props.contacts.instagram }}
            target="_blank"
            className={props.contacts.instagram ? "" : styles.empty}
          >
            <BsInstagram />
          </Link>
          <Link
            to={{ pathname: props.contacts.youtube }}
            target="_blank"
            className={props.contacts.youtube ? "" : styles.empty}
          >
            <BsYoutube />
          </Link>
          <Link
            to={{ pathname: props.contacts.github }}
            target="_blank"
            className={props.contacts.github ? "" : styles.empty}
          >
            <BsGithub />
          </Link>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Profile;
