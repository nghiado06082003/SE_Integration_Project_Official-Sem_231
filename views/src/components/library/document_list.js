// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import axios from 'axios'
// import { useEffect, useState } from "react";
// //import DocItem from "./doc-item";

// function Document_List() {
//     const [documentList, setDocumentList] = useState(null);
//     useEffect(() => {
//         axios.get("/api/documentManagement/").then(
//             (respond) => { setDocumentList(respond.data.docList) }
//         )
//     },[])
//     return (
//         <>
//         <h1>Đây là trang hiển thị danh sách tài liệu</h1>
//         <h6>{!documentList ? "Đang tải, chờ server chút...": documentList}</h6>
//         </>
//     )
// }
// export default Document_List

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa";

import './styles.css';
import DocItem from "./doc-item";
import dummyData from "./dummyData";
import axios from "axios";

function Document_List() {
  const [documentList, setDocumentList] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      axios.get("/api/documentManagement")
      .then((response) => {
        if (response.status === 200 && 'docList' in response.data) {
          setDocumentList(JSON.parse(response.data.docList));
        }
      })
      .catch((error) => {
        console.error(error);
      })
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="container mt-3">
      <div className="row mb-3 top">
        <div className="col-md-6">
          <button className="btn btn-primary">
            <FaUpload className="mr-2" /> Quyên góp tài liệu
          </button>
        </div>
        <div className="col-md-6 text-right">
        
          <input type="text" className="form-control" placeholder="Search" ></input>
        
        </div>
      </div>
      {documentList &&
        documentList.map((doc) => (
          <Link key={doc.document_id} to={`/library/documentDetail/${doc.document_id}`}>
            <DocItem doc={doc} />
          </Link>
        ))}
    </div>
  )
}

export default Document_List;