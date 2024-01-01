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
  const [rerender, setRerender] = useState(0); // Tạo state từ component cha, rồi truyền hàm thay đổi cho con
  // Để khi một bình luận mới được thêm, con sẽ gọi hàm thay đổi của cha, làm thay đổi state của cha
  // Dùng cách này để ép danh sách bình luận re-render để nó có bình luận mới thêm 
  // Hi vọng thế, vì dùng window.reload hay assign các kiểu cả trang thì không hay lắm đến trải nghiệm người dùng
  // Side-effect là nó cũng phải rerender cha (mình không muốn dùng redux đâu dù nó giúp giải quyết vụ này) 
  // Nhưng ít ra nó không gây reload trên trình duyệt

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

  const forceRerender = () => { setRerender(rerender + 1) };

  return (
    <div className="px-0 sm:px-36 lg:px-60 xl:px-72 py-8 lg:py-10">
      {review !== null ? <>
        <ReviewMain item={review} />
        <CommentReviewForm review_id={id} forceRerender={forceRerender}/>
        <CommentReviewList rerender={rerender /* Parent state được pass vào thành prop của con để ép con rerender khi state đổi */} />
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