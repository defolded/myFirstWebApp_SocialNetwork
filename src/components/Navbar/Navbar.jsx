import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <img
            src="https://uploads6.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg!Large.jpg"
            alt="profile"
          />
          <p>Jack Hannon</p>
        </div>
        <nav className={styles.menu}>
          <NavLink
            to={`content`}
            style={({ isActive, isPending }) => {
              return {
                opacity: isActive ? 100 : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Profile
          </NavLink>
          <NavLink
            to={`messages`}
            style={({ isActive, isPending }) => {
              return {
                opacity: isActive ? 100 : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Messages
          </NavLink>
          <NavLink
            to={"news"}
            style={({ isActive, isPending }) => {
              return {
                opacity: isActive ? 100 : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            News
          </NavLink>
          <NavLink
            to={"music"}
            style={({ isActive, isPending }) => {
              return {
                opacity: isActive ? 100 : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Music
          </NavLink>
          <NavLink
            to={"settings"}
            style={({ isActive, isPending }) => {
              return {
                opacity: isActive ? 100 : "",
                color: isPending ? "red" : "black",
              };
            }}
          >
            Settings
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
