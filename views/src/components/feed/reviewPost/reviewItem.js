
import React from "react";
import { Link } from "react-router-dom";
import Book from "./book2.jpg"
function ReviewItem({ review }) {
  return (
    <div className="card mb-3">
        <div className="row">
        <div className="col-2">
        <img
              src={Book}
              className="card-img"
              alt={"ảnh sự kiện"}
              style={{padding:"10px",}}
        />
        </div>
        <div className="col-10">
        <div className="card-body">
        <h5 className="card-title">{review.title}</h5>
        <p className="card-text">
          <strong>Book:</strong> {review.bookTitle} | <strong>Author:</strong>{" "}
          {review.author} | <strong>Score:</strong> {review.score}/100
        </p>
        <p className="card-text">{review.content}</p>
        <Link to={`/review-detail/${review.id}`}>Read more</Link>
      </div>
        </div>
    </div>
      
    </div>
  );
}

export default ReviewItem;
