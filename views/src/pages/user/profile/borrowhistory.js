import React, { useEffect, useState }  from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function BorrowHistory() {
  const [borrowHistory, setBorrowHistory] = useState([]);
  
  useEffect(() => {
    axios.post("/api/loanManagement/customer/borrowhistory", {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      if (response.status === 200 && 'borrowHistory' in response.data) {
        setBorrowHistory(JSON.parse(response.data.borrowHistory));
        console.log(JSON.parse(response.data.borrowHistory))
      }
    })
    .catch((error) => {
      console.error("Error!!!!!!", error);
    });
  }, []);

  const requestReturn = (id, book_id, status) => {
    axios.post("/api/loanManagement/customer/returnrequest", {id: id, book_id: book_id, status: status}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      if (response.status === 200 && '300' in response.data) {
        //request trả thành công
        window.location.reload();
      }
    })
    .catch((error) => {
      console.error("Error!!!!!!", error);
    });
  }

  return (
      <div className="flex-grow">
          <div className="flex-grow flex-col items-center justify-center pl-4 pr-4 md:pl-40 md:pr-40 lg:pl-60 lg:60">
          <h1 className="text-3xl font-bold mb-6 flex justify-center text-blue-500 pt-10">Lịch sử mượn</h1>
          <div className="flex flex-col justify-center py-4">
        {borrowHistory.map((item, index) => (
          <div className='border-b border-gray-200 py-4 px-1'>
            <div className='flex flex-col'>
              <div className='sm:text-lg font-bold text-blue-500'>{item.doc_name}</div>
              {item.status===0 
                &&  
                <div>
                  <div>Ngày đăng kí mượn: <span className="text-gray-500">{(item.request_day).substring(0, 10)}</span></div>
                  <div style={{ margin: "10px 0 10px" }}> Trạng thái : <span className="text-gray-500">Đang chờ duyệt</span></div>
                </div>
              }
              {
                item.status===1 
                &&  
                <div>
                  <div>Ngày đăng kí mượn: <span className="text-gray-500">{(item.request_day).substring(0, 10)}</span></div>
                  <div style={{ margin: "10px 0 10px" }}> Trạng thái : <span className="text-red-500">Bị từ chối</span></div>
                </div>
              }
              {
                (item.status>=2 && item.status<=5)
                &&
                <div>
                  <div>Ngày mượn: <span className="text-gray-500">{(item.received_day).substring(0, 10)}</span></div>
                  <div>Ngày trả dự kiến: <span className="text-gray-500">{(item.expected_returned_day).substring(0, 10)}</span></div>
                  <div className="flex justify-between">
                    <div style={{ margin: "10px 0 10px" }}> Trạng thái : <span className={item.status%2==0?"text-green-500":"text-red-500"}>{item.status%2===0?"Đang mượn":"Đang mượn (quá hạn)"}</span></div>
                    <button 
                    className="bg-primary-500 rounded text-white px-2 py-1 mr-4" 
                    disabled={item.status > 3}
                    onClick={()=>requestReturn(item.id,item.document_id,item.status)}
                    >Trả sách</button>
                  </div>
                </div>
              }
              {
                item.status>=6 
                &&
                <div>
                  <div>Ngày mượn: <span className="text-gray-500">{(item.received_day).substring(0, 10)}</span></div>
                  <div>Ngày trả: <span className="text-gray-500">{(item.returned_day).substring(0, 10)}</span></div>
                  <div style={{ margin: "10px 0 10px" }}> Trạng thái : <span className={item.status==6?"text-green-500":"text-red-500"}>{item.status==6?"Đã trả":"Đã trả (quá hạn)"}</span></div>
                </div>
              }
            </div>
          </div>
        ))}
          </div>
          </div>
      </div>
      
  );
}
