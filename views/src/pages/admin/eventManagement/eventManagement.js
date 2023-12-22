/*
    Hiển thị danh sách bài đăng cũ dưới dạng bảng (đang thắc mắc giao diện của phần này thiệt @@@)
    bao gồm thứ tự, tên bài đăng, ngày tháng đăng bài, tên tác giả (tác giả là admin), link đến bài đăng, click vào sẽ ra trang event/detail/:eventPostId
    

*/
import React, { useEffect, useState } from "react";
import axios from "axios";

//   const [postList, setPostList] = useState([]);
  
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/post/")
//     .then((response) => {
//       if (response.status === 200 && 'responseData' in response.data) {
//         setPostList(JSON.parse(response.data.responseData));
//       }
//     })
//     .catch((error) => {
//       console.error("Error!!!!!!", error);
//     });
//   }, []);
