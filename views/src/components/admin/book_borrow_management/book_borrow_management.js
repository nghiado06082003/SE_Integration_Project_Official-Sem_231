import React, { useEffect, useState } from "react";
import './style.css'; 
import axios from "axios";

function Book_Borrow_Management() {
  const [BorrowList, setBorrowList] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:8080/api/loanManagement/manager/list")
    .then((response) => {
      if (response.status === 200 && 'loanList' in response.data) {
        setBorrowList(JSON.parse(response.data.loanList));
      }
    })
    .catch((error) => {
      console.error("Error!!!!!!", error);
    });
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h1> Danh sách mượn tài liệu </h1>
      </div>
      <div className="row search">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <table className="table table-hover table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center">MSSV</th>
            <th scope="col" class="text-center">Tên thành viên</th>
            <th scope="col" class="text-center">Tựa đề sách</th>
            <th scope="col" class="text-center">Ngày đăng kí</th>
            <th scope="col" class="text-center">Phê duyệt</th>
          </tr>
        </thead>
        <tbody>
          {BorrowList.map((borrowItem) => (
            <tr key={borrowItem.student_id}>
              <th scope="row" class="text-center">{borrowItem.student_id}</th>
              <td class="text-center">{borrowItem.student_name}</td>
              <td class="text-center">{borrowItem.doc_name}</td>
              <td class="text-center">{borrowItem.request_day}</td>
              <td class="text-center">
                    <button class="btn btn-success btn-sm m-2" type="button">Đồng ý</button>
                    <button class="btn btn-danger btn-sm m-2" type="button">Từ chối</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Book_Borrow_Management;
