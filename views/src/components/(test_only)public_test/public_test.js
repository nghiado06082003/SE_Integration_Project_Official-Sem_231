import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, Navigate, useNavigate } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios'
import { useState, useEffect } from "react";
import Header from '../shared/header';
import Cookies from "universal-cookie";
const cookies = new Cookies();

function PublicTest() {
    // const [message, setMessage] = useState(null);
    // const token = cookies.get("TOKEN");
    // const navigate = useNavigate();
    // useEffect(() => {
    //     axios.get("/api/protectedTest", {
    //         headers : {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }).then((response) => {
    //         setMessage(response.data.message);
    //     }).catch((error) => {
    //         navigate("/");
    //     })
    // })
    return (
        <>
            <h1>Đây là trang không cần đăng nhập cũng vào được</h1>
        </>

    )
}

export default PublicTest;