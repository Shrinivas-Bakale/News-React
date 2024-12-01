import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, image, newsUrl, date, author, source } =
      this.props;
    return ( 
      <div>
        <div className="card ">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
            <footer className="my-2" style={{ color: "#6c757d" }}>
              <span className="badge badge-secondary p-2" style={{backgroundColor:"gray"}}>{source}</span> <br />
              By <cite title="Source Title">{author}</cite> on{" "}
              <cite>{new Date(date).toUTCString()}</cite>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
