import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios'
//import { useEffect, useState } from "react";

import React from "react";
import PropTypes from "prop-types";
import Book from "./book2.jpg";

function DocItem({ doc }) {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-2">
          <div className="card-img-container">
            <img
              src={Book}
              className="card-img"
              alt={doc.doc_name}
            />
          </div>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="title">{doc.doc_name}</h5>
            <p>Author: {doc.author}</p>
            <p>Type: {doc.type}</p>
            <p>{doc.text}</p>
          </div>
        </div>
      </div>
      <div className="row no-gutters foot">
        <div className="col-md-12">
          <div className="card-body">
            <p className="card-text">76 trang | Ngày đăng: 1/1/2023 | Chia sẻ bởi: Nguyễn Văn A </p>
          </div>
        </div>
      </div>
    </div>
  );
}

DocItem.propTypes = {
  doc: PropTypes.shape({
    document_id: PropTypes.number.isRequired,
    doc_name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    publish_year: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default DocItem;