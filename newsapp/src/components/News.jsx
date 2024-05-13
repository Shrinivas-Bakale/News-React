import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="3 Atlanta police officers wounded in shooting, suspect dead - Fox News"
              description="Three Atlanta police officers are expected to survive after being shot while responding to a call about an armed individual on Saturday evening."
              image="https://static.foxnews.com/foxnews.com/content/uploads/2024/05/atlanta-pd-shooting2.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
