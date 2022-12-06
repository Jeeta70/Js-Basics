import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    const { title, description, imageUrl, newUrl,author,date } = this.props;
    // console.log(author);
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{`${title.slice(0, 35)} ...`}</h5>
            <p className="card-text">{`${description.slice(0, 60)} ...`}</p>
            <small className="text-muted">By {author} on {new Date(date).toDateString()}</small>
            <a
              href={newUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"   
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
