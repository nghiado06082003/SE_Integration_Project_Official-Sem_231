import React, { useEffect, useState }  from "react";
import './styles.css'; 
import axios from "axios";

function Book_Borrow() {
  // const [borrowHistory, setBorrowHistory] = useState([]);
  
  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/loanManagement/customer/borrowhistory", { params: { id: student_id } })
  //   .then((response) => {
  //     if (response.status === 200 && 'borrowHistory' in response.data) {
  //       setBorrowHistory(JSON.parse(response.data.borrowHistory));
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error!!!!!!", error);
  //   });
  // }, []);

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
          {/* {borrowHistory.map((borrowItem) => (
            <tr key={borrowItem.document_id}>
              <th scope="row">{borrowItem.document_id}</th>
              <td>{borrowItem.doc_name}</td>
              <td>{borrowItem.received_day}</td>
              <td>{borrowItem.state}</td>
              <td>{borrowItem.returned_day}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Book_Borrow;
