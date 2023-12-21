import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUpload, FaSearch } from "react-icons/fa";

import DocItem from "../../../component/LibItem";
import axios from "axios";

export default function Library() {
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
    <div className="container mx-auto">
      <div className="flex justify-between top">
        <div className="flex items-center">
          <Link to={"/library/donate-document"}>
            <button className="flex bg-primary-500 hover:bg-primary-400 text-white font-semibold py-2 px-4 rounded">
              <FaUpload className="mr-2" />Quyên góp tài liệu
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
            <Link key={doc.document_id} to={`/library/document-detail/${doc.document_id}`}>
              <DocItem doc={doc} />
            </Link>
          ))}
        <style>{customcss}</style> 
      </div>
    </div>
  )
}