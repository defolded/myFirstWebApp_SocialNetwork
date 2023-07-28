import React from "react";
import NewsEntry from "./NewsEntry";

const News = (props) => {
  return (
    <div>
      {props.state.articles.map((newEntry) => {
        return (
          <NewsEntry
            urlToImage={newEntry.urlToImage}
            title={newEntry.title}
            author={newEntry.author}
            description={newEntry.description}
            url={newEntry.url}
          />
        );
      })}
    </div>
  );
};

export default News;
