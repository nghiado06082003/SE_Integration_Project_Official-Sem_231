/*
    hiển thị danh sách chờ phê duyệt mượn: stt, mssv, tên, tên sách, ngày đki mượn link tới trang detail của sách
    hiển thị danh sách đang mượn: stt, mssv, tên, tên sách, ngày phê duyệt mượn, ngày trả dự kiến, trạng thái
    hiển thị danh sách phê duyệt trả: stt, mssv, tên, tên sách, ngày trả, trạng thái, có 2 lựa chọn (accept hoặc phạt->khóa tài khoản)

*/
import React, { useState } from 'react';
const BorrowRequestsTable = () => {
    // Mock data
    const borrowRequests = [
        { id: 1, studentId: '123', studentName: 'John Doe', bookName: 'React Mastery', createDate: '2023-01-01' },
        // Add more data as needed
    ];

    return (
        <div>
        <table className="min-w-full border border-gray-300 text-center">
            <thead>
            <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Mã số sinh viên</th>
                <th className="border px-4 py-2">Họ và tên</th>
                <th className="border px-4 py-2">Tên sách</th>
                <th className="border px-4 py-2">Ngày đăng kí mượn</th>
                <th className="border px-4 py-2">Quyết định</th>
            </tr>
            </thead>
            <tbody>
            {borrowRequests.map((request, index) => (
                <tr key={request.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{request.studentId}</td>
                <td className="border px-4 py-2">{request.studentName}</td>
                <td className="border px-4 py-2">{request.bookName}</td>
                <td className="border px-4 py-2">{request.createDate}</td>
                <td className="border px-4 py-2">
                    <button className="bg-green-500 text-white px-2 py-1 mr-2">Đồng ý</button>
                    <button className="bg-red-500 text-white px-2 py-1">Từ chối</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

const BorrowedBooksTable = () => {
    // Mock data
    const borrowedBooks = [
      { id: 1, studentId: '123', studentName: 'John Doe', bookName: 'React Mastery', requestDate: '2023-01-01', returnDate: '2023-02-01', status: 'Borrowing' },
      // Add more data as needed
    ];
  
    return (
      <div>
        <table className="min-w-full border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Mã số sinh viên</th>
              <th className="border px-4 py-2">Họ và tên</th>
              <th className="border px-4 py-2">Tên sách</th>
              <th className="border px-4 py-2">Ngày mượn</th>
              <th className="border px-4 py-2">Ngày trả dự kiến</th>
              <th className="border px-4 py-2">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book, index) => (
              <tr key={book.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{book.studentId}</td>
                <td className="border px-4 py-2">{book.studentName}</td>
                <td className="border px-4 py-2">{book.bookName}</td>
                <td className="border px-4 py-2">{book.requestDate}</td>
                <td className="border px-4 py-2">{book.returnDate}</td>
                <td className="border px-4 py-2">{book.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

const ReturnRequestsTable = () => {
    // Mock data
    const returnRequests = [
      { id: 1, studentId: '123', studentName: 'John Doe', bookName: 'React Mastery', requestDate: '2023-01-01', status: 'On Time' },
      // Add more data as needed
    ];
  
    return (
      <div>
        <table className="min-w-full border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Mã số sinh viên</th>
              <th className="border px-4 py-2">Họ và tên</th>
              <th className="border px-4 py-2">Tên sách</th>
              <th className="border px-4 py-2">Ngày đăng kí trả</th>
              <th className="border px-4 py-2">Trạng thái</th>
              <th className="border px-4 py-2">Quyết định</th>
            </tr>
          </thead>
          <tbody>
            {returnRequests.map((request, index) => (
              <tr key={request.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{request.studentId}</td>
                <td className="border px-4 py-2">{request.studentName}</td>
                <td className="border px-4 py-2">{request.bookName}</td>
                <td className="border px-4 py-2">{request.requestDate}</td>
                <td className="border px-4 py-2">{request.status}</td>
                <td className="border px-4 py-2">
                  <button className="bg-green-500 text-white px-2 py-1 mr-2">Đồng ý</button>
                  <button className="bg-red-500 text-white px-2 py-1">Phạt</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

const LoanManagement = () => {
    const options = [
      { id: 1, label: 'Yêu cầu mượn sách' },
      { id: 2, label: 'Sách đang cho mượn' },
      { id: 3, label: 'Yêu cầu trả sách' },
    ];
  
    const [selectedOption, setSelectedOption] = useState(options[0]);
  
    const handleOptionChange = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="container  max-w-screen-xl mx-auto my-8">
        <h1 className='text-4xl font-bold mb-8'>Quản lý mượn sách</h1>
        <div className="flex space-x-4">
          {options.map((option) => (
            <button
              key={option.id}
              className={`${
                selectedOption.id === option.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              } px-4 py-2 rounded`}
              onClick={() => handleOptionChange(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
  
        <div className="mt-8">
          {selectedOption.id === 1 && <BorrowRequestsTable />}
          {selectedOption.id === 2 && <BorrowedBooksTable />}
          {selectedOption.id === 3 && <ReturnRequestsTable />}
        </div>
      </div>
    );
};
  
export default LoanManagement;