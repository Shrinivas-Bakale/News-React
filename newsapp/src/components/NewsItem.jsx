import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, image, newsUrl, date } = this.props;
    return (
      <div>
        <div className="card ">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="fs-6">{date}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
