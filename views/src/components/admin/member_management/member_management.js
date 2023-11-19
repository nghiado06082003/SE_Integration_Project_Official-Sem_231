import React from "react";
import MemberList from "./data_memeber";
import './style.css'; 

function Member_Management() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h1> Danh sách thành viên </h1>
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
            <th scope="col" class="text-center">Tên người dùng</th>
            <th scope="col" class="text-center">Quyền</th>
            <th scope="col" class="text-center">Trạng thái</th>
            <th scope="col" class="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {MemberList.MemberList.map((borrowItem) => (
            <tr key={borrowItem['MSSV']}>
              <th scope="row" class="text-center">{borrowItem['MSSV']}</th>
              <td class="text-center">{borrowItem.name}</td>
              <td class="text-center">{borrowItem["Quyền"]}</td>
              <td class="text-center">{borrowItem["Trạng thái"]}</td>
              <td class="text-center">
                    <button class="btn btn-success btn-sm m-2" type="button">Mở khóa</button>
                    <button class="btn btn-danger btn-sm m-2" type="button">Khóa</button>
                    <button class="btn btn-info btn-sm m-2" type="button">Thay đổi quyền</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Member_Management;
