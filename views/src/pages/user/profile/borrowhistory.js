import React from "react";
import data from './data';
export default function BorrowHistory() {
    return (
        <div className="flex-grow">
           <div className="flex-grow flex-col items-center justify-center pl-4 pr-4 md:pl-40 md:pr-40 lg:pl-60 lg:60">
            <h1 className="text-3xl font-bold mb-6 flex justify-center text-blue-500 pt-10">Lịch sử mượn</h1>
            <div className="flex flex-col justify-center py-4">
          {data.map((item, index) => (
            <div className='flex items-center border-b border-gray-200 flex justify-between py-4 px-1'>
              <div className='flex flex-col'>
                <div className='sm:text-lg font-bold text-blue-500'>{item.name}</div>
                <div style={{ margin: "10px 0 10px" }}> Trạng thái : <span className={item.status ? "text-green-500" : "text-red-500"}>{item.status ? "Đã trả" : "Chưa trả"}</span></div>

                <div className='text-gray-400'>Ngày mượn : {item.date}</div>
                {item.status && <div className='text-gray-400'>Ngày trả : {item.date2}</div>}
              </div>
              <div>
                <button className='border rounded bg-blue-400 p-2 hover:bg-medium text-white'>Xem chi tiết</button>
              </div>
            </div>
          ))}
            </div>
            </div>
        </div>
        
    );
}
