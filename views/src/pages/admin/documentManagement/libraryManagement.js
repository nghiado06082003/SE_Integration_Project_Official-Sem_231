/*
    giao diện hiển thị tất cả tài liệu, có giao diện thêm sách vào, anh nghĩ maybe mình nên sử dụng lại cái giao diện của library dành cho user :???
    ngoài ra còn có thêm phần duyệt sách donate từ user
*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUpload, FaSearch } from "react-icons/fa";
import DocItem from "../../../component/LibItem";
import axios from "axios";

export default function LibraryManagement() {
  const [documentList, setDocumentList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [triggerFetch, setTriggerFetch] = useState(false);
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/documentManagement")
      .then((response) => {
        setDocumentList(response.data.docList);
      })
      .catch((error) => {
        setErrorMessage(error.response?.data?.message ?? "Hệ thống gặp vấn đề. Vui lòng thử lại sau");
      });
  }, [triggerFetch]);
  
  const loadingElement = (
    <div className="flex justify-center gap-3 text-lg font-semibold">
      <span>Dữ liệu đang tải, vui lòng chờ trong giây lát</span>
      <div role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
  
  return (
    <div className="container max-w-screen-xl mx-auto">
      <h1 className='text-4xl text-center font-bold mt-8'>Quản lý thư viện</h1>
      <div className="flex justify-between my-8">
        <div className="flex items-center gap-2">
          <Link
            role="button"
            to="/admin/library-management/upload"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-400 text-white font-semibold py-2 px-4 rounded"
          >
            <FaUpload className="mr-2" />
            <span>Đăng tải tài liệu mới</span>
          </Link>
          {/* <Link
            role="button"
            to="/admin/library-management/donate-management"
            className="bg-primary-500 hover:bg-primary-400 text-white font-semibold py-2 px-4 rounded"
          >
            Phê duyệt tài liệu mới
          </Link> */}
          { /* Not developed yet */}
        </div>
        <div className="flex items-center text-darkblue border-b border-primary-300 h-10">
          <form className="flex items-center text-darkblue">
            <span className="ml-2">
              <FaSearch className="text-primary-600 mr-5" />
            </span>
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Search..."
            />
            <select name="sort" className="focus-visible:outline-none">
                <option value='datedes' defaultChecked>Latest</option>
                <option value='dateacs'>Oldest</option>
                <option value='viewdes'>Most View</option>
                <option value='likedes'>Most Like</option>
            </select>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {documentList.length > 0 && errorMessage === '' ?
          documentList.map((doc) => (
            <Link
              key={doc.document_id}
              to={`/admin/library-management/document-detail/${doc.document_id}`}
            >
              <DocItem doc={doc} triggerFetch={triggerFetch} setTriggerFetch={setTriggerFetch} />
            </Link>
          ))
        : errorMessage !== '' ?
          <h2 className="text-center text-lg font-semibold">{errorMessage}</h2>
        :
          loadingElement
        }
      </div>
    </div>
  )
}