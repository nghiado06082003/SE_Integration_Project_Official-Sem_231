// PostItem.js
import React from "react";
import { Link } from "react-router-dom";
import Image from "./event.png";
function PostItem({ post }) {
  return (
    <div className="card mb-3">
    <div className="row">
        <div className="col-2">
        <img
              src={Image}
              className="card-img"
              alt={"ảnh sự kiện"}
              style={{padding:"10px",}}
        />
        </div>
        <div className="col-10">
        <div className="card-body">
        <h5 className="title">{post.title}</h5>
        <p>Date: {post.date}</p>
        <p>{post.description}</p>
        <Link to={`/post-detail/${post.id}`}>Read more</Link>
      </div>
        </div>
    </div>
      
    </div>
  );
}

export default PostItem;
