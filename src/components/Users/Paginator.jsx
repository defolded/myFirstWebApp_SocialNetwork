import React from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

  return (
    <div>
      {pages.map((page) => {
        return (
          <span
            className={props.page === page ? styles.selectedPage : ""}
            onClick={() => {
              props.setCurrentPage(page);
            }}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
