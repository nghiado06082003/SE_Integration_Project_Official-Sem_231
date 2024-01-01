import React from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle } from 'react-icons/fi';

const ReviewList = ({ data }) => {
  return (
    <div className="px-28 mb-8">
      {data.map((item, index) => (
        <Link to={`/forum/${item.review_id}`} key={index} className="block rounded-lg bg-white shadow-xl mb-10">
          <div className="flex px-4 py-6">
            <img
              src={item.image_url}
              alt="Book Reviewed"
              className='w-48'
            />
            <div className="grow flex flex-col ml-10">
              <h3 className='font-semibold text-2xl'>{item.title}</h3>
              <h3 className='font-semibold mb-2'>Sách {item.book_name} - Tác giả: {item.book_author}</h3>
              <div className="flex items-center gap-3 mb-4">
                <img
                  className="w-8 h-8 rounded-full object-cover shadow"
                  src={item.avatar_url}
                  alt="Reviewer's avatar"
                />
                <p className="text-sm text-gray-500">
                  Reviewer: <span className='text-gray-950 font-semibold'>{item.student_name}</span> - {new Date(item.submit_date).toLocaleDateString('en-GB')}
                </p>
              </div>
              <p className="grow text-gray-700 text-sm">{item.summary}</p>
              <div className="mt-4">
                <div className="flex items-center mr-2 text-gray-700 text-sm mr-8">
                  <FiMessageCircle className="w-4 h-4 mr-1" />
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReviewList;