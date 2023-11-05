import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios'
import { useEffect, useState } from "react";

function Document_List() {
    const [documentList, setDocumentList] = useState(null);
    useEffect(() => {
        axios.get("/api/documentManagement/").then(
            (respond) => { setDocumentList(respond.data.docList) }
        )
    },[])
    return (
        <>
        <h1>Đây là trang hiển thị danh sách tài liệu</h1>
        <h6>{!documentList ? "Đang tải, chờ server chút...": documentList}</h6>
        </>
    )
}
export default Document_List