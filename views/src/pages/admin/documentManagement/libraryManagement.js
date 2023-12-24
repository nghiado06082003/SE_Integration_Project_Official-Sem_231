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

  const customcss = `
    .icon
    {
        margin-right:20px;
    }
    .search
    {
        border-bottom: solid 1px #86BEC2;
    }
    .top
    {
        margin:70px 0px 60px 0px;
    }
    .bg-bluelight
    {
        padding: 10px 30px 10px 30px;
    }
    @media screen and (max-width: 1000px) {
      .grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
      }
  }
  
  @media screen and (max-width: 768px) {
      .grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
      }
  }
    `;
  
  useEffect(() => {
    axios.get("/api/documentManagement")
    .then((response) => {
      if (response.status === 200 && 'docList' in response.data) {
        setDocumentList(JSON.parse(response.data.docList));
      }
    })
    .catch((error) => {
      console.error("Error!!!!!!", error);
    });
  }, []);
  
  return (
    <div className="container max-w-screen-xl mx-auto">
        <h1 className='text-4xl font-bold mt-8'>Quản lý thư viện</h1>
      <div className="flex justify-between my-6">
        <div className="flex items-center">
          <Link to={"/admin/library-management/upload"}>
            <button className="flex bg-primary-500 hover:bg-primary-400 text-white font-semibold py-2 px-4 rounded">
              <FaUpload className="mr-2" />Đăng tải tài liệu mới
            </button>
          </Link>
          <Link to={"/admin/library-management/donate-management"} className="ml-2">
            <button className="flex bg-primary-500 hover:bg-primary-400 text-white font-semibold py-2 px-4 rounded">
              Phê duyệt tài liệu mới
            </button>
          </Link>
        </div>
        <div className="flex items-center text-darkblue border-b border-primary-300">
          <form className="flex items-center text-darkblue">
            <span className="ml-2">
              <FaSearch className="text-primary-600 icon" />
            </span>
            <input
              type="text"
              className="w-full focus:outline-none"
              placeholder="Search..."
            />
            <select name="sort" className="focus-visible:outline-none">
                <option value={'datedes'} defaultChecked>Latest</option>
                <option value={'dateacs'} >Oldest</option>
                <option value={'viewdes'}>Most View</option>
                <option value={'likedes'}>Most Like</option>
            </select>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {documentList &&
          documentList.map((doc) => (
            <Link key={doc.document_id} to={`/library-management/document-detail/${doc.document_id}`}>
              <DocItem doc={doc} />
            </Link>
          ))}
        <style>{customcss}</style> 
      </div>
    </div>
  )
}