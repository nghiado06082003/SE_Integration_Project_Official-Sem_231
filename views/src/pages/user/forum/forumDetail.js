/*
    Vào bài đăng forum chi tiết, hiển thị danh sách cmt của cái topic/review đó theo thời gian
    dạng như forum trong bkel chăng?
*/
import React, { useEffect, useState } from 'react';
import ReviewMain from '../../../component/ReviewMain';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingElement from '../../../component/LoadingElement';
import { FiMessageCircle } from 'react-icons/fi';

const comments = [
  {
    id: 1,
    author: "Michael Gough",
    profilePic: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    date: "Feb. 8, 2022",
    content:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
  },
];

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
      <ReviewMain item={review}></ReviewMain>
      <div className="">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-bold text-gray-900">Thảo luận</h2>
          <div className="flex items-center h-full text-gray-700 text-sm">
            <FiMessageCircle className="w-4 h-4 mr-1" />
            <span>{10}</span>
          </div>
        </div>
        <form className="mb-6">
          <div className="mb-4 rounded-lg border border-gray-200">
            <label htmlFor="comment" className="sr-only">
              Hãy thảo luận về chủ đề
            </label>
            <textarea
              id="comment"
              rows="5"
              className="py-2 px-4 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="Viết bình luận"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
          >
            Gửi bình luận
          </button>
        </form>
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="p-6 text-base bg-white border-t border-gray-200 "
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src={comment.profilePic}
                    alt={comment.author}
                  />
                  {comment.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    // pubdate
                    dateTime="2022-02-08"
                    title="February 8th, 2022"
                  >
                    {comment.date}
                  </time>
                </p>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              {comment.content}
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline font-medium"
              ></button>
            </div>
          </article>
        ))}
      </div>
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