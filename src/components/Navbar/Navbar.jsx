import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.profile}>
        <img
          src="https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg"
          alt="profile"
        />
        <p>Jack Hannon</p>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
