import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi'; 

const ReviewCard = ({ item }) => {

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-full pl-8 pr-8 pb-8 ml-8 mr-9">
        <div to={`/forum/${item.id}`} className="flex rounded-lg bg-white shadow-xl ml-10 mr-10 mb-10">
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
    </div>
  );
};

export default ReviewCard;
