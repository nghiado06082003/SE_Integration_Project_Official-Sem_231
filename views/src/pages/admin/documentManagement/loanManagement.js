/*
    hiển thị danh sách chờ phê duyệt mượn: stt, mssv, tên, tên sách, ngày đki mượn link tới trang detail của sách
    hiển thị danh sách đang mượn: stt, mssv, tên, tên sách, ngày phê duyệt mượn, ngày trả dự kiến, trạng thái
    hiển thị danh sách phê duyệt trả: stt, mssv, tên, tên sách, ngày trả, trạng thái, có 2 lựa chọn (accept hoặc phạt->khóa tài khoản)
    

*/

import React, { useEffect, useState } from "react";
import axios from "axios";

//   const [BorrowList, setBorrowList] = useState([]);
  
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/loanManagement/manager/list")
//     .then((response) => {
//       if (response.status === 200 && 'loanList' in response.data) {
//         setBorrowList(JSON.parse(response.data.loanList));
//       }
//     })
//     .catch((error) => {
//       console.error("Error!!!!!!", error);
//     });
//   }, []);

// const approve = (id) => {
//     axios.get("http://localhost:8080/api/loanManagement/manager/request/approve", {params: {id: id}})
//     .then((response) => {
//       if (response.status === 200 && response.data.code === 300) {
//         window.location.reload();
//       }
//     })
//     .catch((error) => {
//       console.error("Error!!!!!!", error);
//     });
//   };

//   const deny = (id) => {
//     axios.get("http://localhost:8080/api/loanManagement/manager/request/deny", {params: {id: id}})
//     .then((response) => {
//       if (response.status === 200 && response.data.code === 300) {
//         window.location.reload();
//       }
//     })
//     .catch((error) => {
//       console.error("Error!!!!!!", error);
//     });
//   };