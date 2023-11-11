// Document_List.js
import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import ReviewItem from "./reviewItem"; // Import your new component
import reviewData from "./rvdata.js";

function Review_List() {
  const [reviewList, setReviewList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = { data: reviewData };
      setReviewList(response.data.reviewList);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row mb-3 top">
        <div className="col-md-6">
          <button className="btn btn-primary">
            <FaUpload className="mr-2" /> Create New Review
          </button>
        </div>
        <div className="col-md-6 text-right">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
        <h2 style={{fontWeight:"bold",}}>Các bài review của bạn</h2>
      {reviewList &&
        reviewList.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
         <h2  style={{fontWeight:"bold",}}>Các bài review của người khác</h2>
      {reviewList &&
        reviewList.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
    </div>
  );
}

export default Review_List;
