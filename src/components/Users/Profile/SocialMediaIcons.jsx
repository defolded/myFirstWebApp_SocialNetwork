import React from "react";
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
import styles from "./Profile.module.css";

const SocialMediaIcons = (props) => {
  return (
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
  );
};

export default SocialMediaIcons;
