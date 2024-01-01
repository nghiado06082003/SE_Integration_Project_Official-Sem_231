/*
    Vào bài đăng forum chi tiết, hiển thị danh sách cmt của cái topic/review đó theo thời gian
    dạng như forum trong bkel chăng?
*/
import React, { useEffect, useState } from 'react';
import ReviewMain from '../../../component/ReviewMain';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingElement from '../../../component/LoadingElement';
import CommentReviewForm from './CommentReviewForm';
import CommentReviewList from './CommentReviewList';

const DiscussionSection = () => {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    axios
      .post("http://localhost:8080/api/review/reviewContentAccepted", {
        review_id: id
      })
      .then((response) => {
        setReview(response.data.review);
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.message ?? "Hệ thống gặp vấn đề. Vui lòng thử lại sau");
      });
  }, [id]);
  
  return (
    <div className="px-0 sm:px-36 lg:px-60 xl:px-72 py-8 lg:py-10">
      {review !== null ? <>
        <ReviewMain item={review} />
        <CommentReviewForm />
        <CommentReviewList />
      </>
      : errorMessage !== '' ?
        <h2 className="text-center text-lg font-semibold">{errorMessage}</h2>
      :
        <LoadingElement />
      }
    </div>
  );
};

export default DiscussionSection;