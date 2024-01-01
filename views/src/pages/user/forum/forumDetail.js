/*
    Vào bài đăng forum chi tiết, hiển thị danh sách cmt của cái topic/review đó theo thời gian
    dạng như forum trong bkel chăng?

*/
import React from "react";
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi'; 
import { useParams } from "react-router-dom";

import reviews from './reviewdata';

const comments = [
    {
      id: 1,
      author: 'Michael Gough',
      profilePic: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      date: 'Feb. 8, 2022',
      content: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
    },
  ];
const DiscussionSection = () => {
  const { id } = useParams();
  const item = reviews[id];
  return (
    <div className='flex flex-grow justify-center'>
      
      <div className="bg-white py-8 lg:py-16 antialiased ">
      <div className="flex flex-col w-full pl-8 pr-8 pb-8 ml-8 mr-9">
        <div className="flex rounded-lg bg-white ml-10 mr-10 mb-10">
          <div className="flex items-start px-4 py-6">
            <img
              className="w-20 h-20 rounded-full object-cover mr-4 shadow"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 -mt-1">{item.author}</h2>
              </div>
              <p className="text-gray-700">{item.date}</p>
              <p className="mt-3 text-gray-700 text-sm">
                {item.content}
              </p>
              <div className="mt-4 flex items-center">
                <div className="flex mr-2 text-gray-700 text-sm mr-8">
                  <FiMessageCircle className="w-4 h-4 mr-1" />
                  <span>{item.comments}</span>
                </div>
                <div className="flex mr-2 text-gray-700 text-sm mr-4">
                  <FiShare2 className="w-4 h-4 mr-1" />
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto px-4 pl-12 pr-12 pb-12 ml-12 mr-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">Thảo luận</h2>
        </div>
        <form className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
            <label htmlFor="comment" className="sr-only">Hãy thảo luận về chủ đề</label>
            <textarea
              id="comment"
              rows="6"
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
              placeholder="Write a comment..."
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
          <article key={comment.id} className="p-6 text-base bg-white border-t border-gray-200 ">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
                  <img className="mr-2 w-6 h-6 rounded-full" src={comment.profilePic} alt={comment.author} />
                  {comment.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time pubdate datetime="2022-02-08" title="February 8th, 2022">{comment.date}</time>
                </p>
              </div>

            </footer>
            <p className="text-gray-500 dark:text-gray-400">{comment.content}</p>
            <div className="flex items-center mt-4 space-x-4">
              <button type="button" className="flex items-center text-sm text-gray-500 hover:underline font-medium">

              </button>
            </div>
          </article>))}
          </div>
    </div>
    </div>
    
  );
};

export default DiscussionSection;
