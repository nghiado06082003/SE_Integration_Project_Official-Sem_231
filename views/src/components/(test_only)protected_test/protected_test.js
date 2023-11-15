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

function ProtectedTest() {
    const [message, setMessage] = useState(null);
    const token = cookies.get("TOKEN");
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Sắp tới rồi");
        axios.post("/api/protectedTest", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log("Nên chạy ở đây");
            setMessage(response.data.message);

        }).catch((error) => {
            console.log(error.response);
        })
    }, [])
    return (
        <>
            <h1>Đây là trang dành riêng cho Ban chủ nhiệm, và chỉ nên hiển thị cho Ban chủ nhiệm</h1>
            <button type="submit" className="btn btn-primary" onClick={() => { cookies.remove("TOKEN", { path: "/" }); navigate("/signin");}}>
                Đăng xuất
            </button>
            <h6>{message ? message : "Chờ server authorize quyền..."}</h6>
        </>

    )
}

export default ProtectedTest;