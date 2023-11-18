import React from "react";
import dataBorrow from "./data_borrow";
import './style.css'; 

function Book_Borrow_Management() {
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
          {dataBorrow.BorrowList.map((borrowItem) => (
            <tr key={borrowItem['MSSV']}>
              <th scope="row" class="text-center">{borrowItem['MSSV']}</th>
              <td class="text-center">{borrowItem.name}</td>
              <td class="text-center">{borrowItem["Tựa đề sách"]}</td>
              <td class="text-center">{borrowItem["Ngày đăng ký"]}</td>
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
