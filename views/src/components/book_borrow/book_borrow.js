import React from "react";
import dataBorrow from "./data_borrow_user";
import './styles.css'; 

function Book_Borrow() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h1> Lịch sử mượn </h1>
      </div>
      <div className="row search">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Số thứ tự</th>
            <th scope="col">Tên sách</th>
            <th scope="col">Ngày mượn</th>
            <th scope="col">Tình trạng trả</th>
            <th scope="col">Ngày trả</th>
          </tr>
        </thead>
        <tbody>
          {dataBorrow.BorrowList.map((borrowItem) => (
            <tr key={borrowItem.id}>
              <th scope="row">{borrowItem.id}</th>
              <td>{borrowItem.name}</td>
              <td>{borrowItem["Ngày mượn"]}</td>
              <td>{borrowItem["Trạng thái"]}</td>
              <td>{borrowItem["Ngày trả"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Book_Borrow;
