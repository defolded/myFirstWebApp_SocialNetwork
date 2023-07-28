import React from "react";
import { Link } from "react-router-dom";

const NewsEntry = (props) => {
  return (
    <div>
      <div>
        <img
          src={
            props.urlToImage
              ? props.urlToImage
              : "https://www.citypng.com/public/uploads/preview/free-newspaper-news-icon-png-11639741012iwvboqumq5.png"
          }
          width="150px"
          height="150px"
          alt="news"
        />
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
      </div>
      <p>{props.description}</p>
      {/* <Link to={props.url}>{props.source.name}</Link> */}
    </div>
  );
};

export default NewsEntry;
