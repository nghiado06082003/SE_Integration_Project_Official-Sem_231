import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios'


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaSearch, FaDownload, FaBook } from "react-icons/fa"; 
import dummyData from "./dummyData"; 
import Book from "./book.png";

function DocDetail() {
  const { document_id } = useParams();
  const [selectedDoc, setSelectedDoc] = useState({});
  useEffect(() => {
    const fetchData = async() => {
      axios.get('/api/documentManagement/detail', {
        params: {
          document_id: parseInt(document_id)
        }
      })
      .then((response) => {
        setSelectedDoc(JSON.parse(response.data.docList)[0])
      })
    }
    fetchData()
  }, [])
  // const selectedDoc = dummyData.docList.find((doc) => doc.document_id === parseInt(document_id, 10));
  
  if (!selectedDoc) {
    return <div>Document not found</div>;
  }
  
  return (
    <div className="container mt-3">
      <div className="row mb-3 top">
        <div className="col-md-6"></div>
        <div className="col-md-6 text-right">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <div className="row big">
        <div className="row">
          <div className="col-md-4">
            <img src={Book} className="img-fluid" alt={selectedDoc.doc_name} />
          </div>
          <div className="col-md-8">
            <h2>{selectedDoc.doc_name}</h2>
            <p>Author: {selectedDoc.author}</p>
            <p>Type: {selectedDoc.type}</p>
            <p>Publisher: {selectedDoc.publisher}</p>
            <p>Publish Year: {selectedDoc.publish_year}</p>
            <p>Quantity: {selectedDoc.quantity}</p>
            <p>{selectedDoc.text}</p>
          </div>
        </div>
        <div className="row data">
          <br></br>
          
          <p>{selectedDoc.text}</p>
          <p>{selectedDoc.decription}</p>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 d-flex justify-content-center">
            <button className="btn btn-primary">
              <FaDownload className="mr-2" /> Download
            </button>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <button className="btn btn-primary">
              <FaBook className="mr-2" /> Register Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocDetail;