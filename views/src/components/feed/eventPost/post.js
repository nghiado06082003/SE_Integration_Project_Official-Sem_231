// Document_List.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import PostItem from "./PostItem.js"; // Import your new component
import postData from "./postdata.js";

function EventPost() {
  const [postList, setPostList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = { data: postData };
      setPostList(response.data.postList);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row mb-3 top">
        <div className="col-md-6">
          {/* <button className="btn btn-primary">
            <FaUpload className="mr-2" /> Create New Post
          </button> */}
        </div>
        <div className="col-md-6 text-right">
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
      </div>

      {postList &&
        postList.map((post) => (
          <Link key={post.id} to={`/post-detail/${post.id}`}>
            <PostItem post={post} />
          </Link>
        ))}
    </div>
  );
}

export default EventPost;
