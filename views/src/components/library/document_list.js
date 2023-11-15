import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa";

import './styles.css';
import DocItem from "./doc-item";
import axios from "axios";

function Document_List() {
  const [documentList, setDocumentList] = useState([]);
  
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