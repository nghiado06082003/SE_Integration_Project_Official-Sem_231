import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MemberList from "./data_memeber";
import './style.css'; 

function Member_Management() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    document.body.style = "dimmeed"
  })

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  }

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
          <tr class={!showPopup ? "" : "dimmed"}>
            <th scope="col" class="text-center">MSSV</th>
            <th scope="col" class="text-center">Tên người dùng</th>
            <th scope="col" class="text-center">Quyền</th>
            <th scope="col" class="text-center">Trạng thái</th>
            <th scope="col" class="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {MemberList.MemberList.map((borrowItem) => (
            <tr class={!showPopup ? "" : "dimmed"} key={borrowItem['MSSV']}>
              <th scope="row" class="text-center">{borrowItem['MSSV']}</th>
              <td class="text-center">{borrowItem.name}</td>
              <td class="text-center">{borrowItem["Quyền"]}</td>
              <td class="text-center">{borrowItem["Trạng thái"]}</td>
              <td class="text-center">
                    <button class="btn btn-success btn-sm m-2" type="button">Mở khóa</button>
                    <button class="btn btn-danger btn-sm m-2" type="button">Khóa</button>
                    <button class="btn btn-info btn-sm m-2" type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={handlePopupToggle}>Thay đổi quyền</button>
          
                    <div className={`modal ${showPopup ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showPopup ? 'block' : 'none' }}>
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h2 className="modal-title">Thay đổi quyền</h2>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handlePopupToggle}>
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div class="d-grid gap-2">
                            <button class="btn btn-info" type="button">Cộng tác viên</button>
                            <button class="btn btn-info" type="button">Thành viên ban truyền thông</button>
                            <button class="btn btn-info" type="button">Thành viên ban nội dung</button>
                            <button class="btn btn-info" type="button">Thành viên ban hậu cần</button>
                            <button class="btn btn-info" type="button">Thành viên ban chủ nhiệm</button>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handlePopupToggle}>
                            Lưu
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Member_Management;
