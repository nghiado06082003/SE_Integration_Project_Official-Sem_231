import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function ForumCreateReview() {
  const [user, setUser] = useState(null);
  const [reviewData, setReviewData] = useState({
    reviewTitle: '',
    reviewForBook: '',
    bookAuthor: '',
    reviewSummary: '',
    reviewContent: '',
    image: '',
  });
  
  const handleInputChange = (e) => {
    console.log(reviewData)
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!isAuthorized) {
    //   return;
    // }
    
    // const token = cookies.get("TOKEN");
    // try {
    //   const response = await axios.post(`http://localhost:8080/api/documentManagement/add`,
    //     {
    //       doc_name: reviewData.bookTitle,
    //       author: reviewData.bookAuthor,
    //       publisher: reviewData.bookPublisher,
    //       publish_year: reviewData.bookPublishYear,
    //       quantity: reviewData.quantity,
    //       description: reviewData.description,
    //       image_url: reviewData.image
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     }
    //   );
    //   alert(response.data.message);
    //   window.location.assign('/admin/library-management');
    // }
    // catch (error) {
    //   console.log(error.response);
    // }
  };
  
  return (
    <div className="w-1/3 mx-auto m-10 p-6 bg-blue-100 rounded-md shadow-md">
      <h1 className="text-center font-bold mb-4 text-2xl">Tạo bài review mới</h1>
      <form
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="reviewTitle"
          className="block text-sm font-semibold text-gray-600"
        >
          Tựa đề bài review:
        </label>
        <input
          type="text"
          id="reviewTitle"
          name="reviewTitle"
          value={reviewData.reviewTitle}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        
        <label
          htmlFor="reviewForBook"
          className="block text-sm font-semibold text-gray-600"
        >
          Tên sách:
        </label>
        <input
          type="text"
          id="reviewForBook"
          name="reviewForBook"
          value={reviewData.reviewForBook}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        
        <label
          htmlFor="bookAuthor"
          className="block text-sm font-semibold text-gray-600"
        >
          Tác giả:
        </label>
        <input
          type="text"
          id="bookAuthor"
          name="bookAuthor"
          value={reviewData.bookAuthor}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        
        <label
          htmlFor="reviewSummary"
          className="block text-sm font-semibold text-gray-600"
        >
          Tóm tắt nội dung:
        </label>
        <input
          type="text"
          id="reviewSummary"
          name="reviewSummary"
          value={reviewData.reviewSummary}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        
        <label
          htmlFor="reviewContent"
          className="block text-sm font-semibold text-gray-600"
        >
          Nội dung review:
        </label>
        <textarea
          id="reviewContent"
          name="reviewContent"
          value={reviewData.reviewContent}
          onChange={handleInputChange}
          rows="4"
          cols="50"
          className="w-full px-4 py-2 mt-1 mb-6 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        ></textarea>
        
        <label
          htmlFor="image"
          className="block text-sm font-semibold text-gray-600"
        >
          Link hình ảnh:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={reviewData.image}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-1 mb-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-sm font-semibold text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500"
        >
          Gửi bài review
        </button>
      </form>
    </div>
  );
}