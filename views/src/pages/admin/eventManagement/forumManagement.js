/*
    tương tự với eventManagement
    Hiển thị danh sách bài đăng cũ dưới dạng bảng (đang thắc mắc giao diện của phần này thiệt @@@)
    bao gồm thứ tự, tên bài đăng, ngày tháng đăng bài, tên tác giả (tác giả là admin hoặc member), link đến bài đăng, click vào sẽ ra trang event/detail/:eventPostId
    ngoài ra còn có thêm cái là duyệt bài thảo luận/review, hoặc xóa bài đó đi
*/

// ForumManagement.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewPostRequest = () => {
  const [reviewRequests, setReviewRequests] = useState([
    { id: 1, studentId: '123', studentName: 'John Doe', postReviewName: 'Book Review 1', bookName: 'React Mastery', createDate: '2023-01-01' },
    // Add more review request data as needed
  ]);

  const handleAcceptRequest = (id) => {
    // Logic to handle accepting a review request
    // Update the state or make an API call
  };

  const handleRejectRequest = (id) => {
    // Logic to handle rejecting a review request
    // Update the state or make an API call
  };

  return (
    <div>
        <table className="min-w-full border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Mã số sinh viên</th>
              <th className="border px-4 py-2">Họ và tên</th>
              <th className="border px-4 py-2">Tên sách</th>
              <th className="border px-4 py-2">Tên bài review</th>
              <th className="border px-4 py-2">Ngày đăng tải</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviewRequests.map((request, index) => (
              <tr key={request.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{request.studentId}</td>
                <td className="border px-4 py-2">{request.studentName}</td>
                <td className="border px-4 py-2">{request.bookName}</td>
                <td className="border px-4 py-2">
                  <Link to={`/admin/forum-management/detail/${request.id}`} className='text-primary-700'>
                    {request.postReviewName}
                  </Link>
                </td>
                <td className="border px-4 py-2">{request.createDate}</td>
                <td className="border px-4 py-2">
                  <button className="bg-green-500 text-white px-2 py-1 mr-2" onClick={() => handleAcceptRequest(request.id)}>Accept</button>
                  <button className="bg-red-500 text-white px-2 py-1" onClick={() => handleRejectRequest(request.id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
  
}

const ReviewPostManagement = () =>{
  const [acceptedPosts, setAcceptedPosts] = useState([
    { id: 1, studentId: '456', studentName: 'Jane Smith', bookName: 'JavaScript Fundamentals', postReviewName: 'Book Review 1', dateOfCreate: '2023-01-10' },
    // Add more accepted post data as needed
  ]);

  const handleDeletePost = (id) => {
    // Logic to handle deleting an accepted post
    // Update the state or make an API call
  };

  return (
    <div className="mt-8">
    <table className="min-w-full border border-gray-300 text-center">
      <thead>
        <tr>
          <th className="border px-4 py-2">#</th>
          <th className="border px-4 py-2">Mã số sinh viên</th>
          <th className="border px-4 py-2">Họ và tên</th>
          <th className="border px-4 py-2">Tên sách</th>
          <th className="border px-4 py-2">Tên bài review</th>
          <th className="border px-4 py-2">Ngày đăng tải</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {acceptedPosts.map((post, index) => (
          <tr key={post.id}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{post.studentId}</td>
            <td className="border px-4 py-2">{post.studentName}</td>
            <td className="border px-4 py-2">{post.bookName}</td>
            <td className="border px-4 py-2">
              <Link to={`/admin/forum-management/detail/${post.id}`} className='text-primary-700'>
                {post.postReviewName}
              </Link>
            </td>
            <td className="border px-4 py-2">{post.dateOfCreate}</td>
            <td className="border px-4 py-2">
              <button className="bg-red-500 text-white px-2 py-1" onClick={() => handleDeletePost(post.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
  
}

const ForumManagement = () => {
  const options = [
    { id: 1, label: 'Bài review chờ duyệt' },
    { id: 2, label: 'Bài review đã duyệt' },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container  max-w-screen-xl mx-auto my-8">
      <h1 className='text-4xl font-bold mb-8'>Quản lý diễn đàn</h1>
      <div className="flex space-x-4">
        {options.map((option) => (
          <button
            key={option.id}
            className={`${
              selectedOption.id === option.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700'
            } px-4 py-2 rounded`}
            onClick={() => handleOptionChange(option)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {selectedOption.id === 1 && <ReviewPostRequest/>}
        {selectedOption.id === 2 && <ReviewPostManagement/>}
      </div>
    </div>
  );
};

export default ForumManagement;

