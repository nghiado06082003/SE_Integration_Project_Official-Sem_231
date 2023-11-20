import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../../img/SIMSBCLogo.png'
import { useState } from "react";
import './navbar.css'


export default function Navbar(props){

    const [authInfo,setAuthInfo] = useState({
        isLogin: true,
        isAdmin: true,
        isAdminMode: true
    })




    let leftNavItem1, leftNavItem2, rightNavItem1, rightNavItem2
    if (authInfo.isAdmin && authInfo.isAdminMode){
        leftNavItem1 = <li className="nav-item dropdown">
            <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Quản lý hoạt động
            </NavLink>
            <ul className="dropdown-menu">
                    <li>
                        <NavLink className="dropdown-item" to="/feed/event">
                            Bài viết
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/feed/review">
                            Review
                        </NavLink>
                    </li>
                </ul>
        </li>
        leftNavItem2 = <li className="nav-item dropdown">
            <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Quản lý tài liệu
            </NavLink>
            <ul className="dropdown-menu">
                    <li>
                        <NavLink className="dropdown-item" to="/library">
                            Thư viện
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/documentManagement/loan">
                            Mượn sách
                        </NavLink>
                    </li>
                </ul>
        </li>
        rightNavItem1 = <li className="nav-item">
            <NavLink className="nav-link" to="/memberManagement">
                Quản lý thành viên
            </NavLink>
        </li>
        rightNavItem2 = <li className="nav-item dropdown">
            <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Thông tin
            </NavLink>
            <ul className="dropdown-menu">
                <li>
                    <NavLink className="dropdown-item" to="/">
                        Người dùng
                    </NavLink>
                </li>
                <li>
                    <NavLink className="dropdown-item" to="/my">
                        Thông tin cá nhân
                    </NavLink>
                </li>
                <li>
                    <NavLink className="dropdown-item" to="/logout">
                        Đăng xuất
                    </NavLink>
                </li>
            </ul>
        </li>
    }
    else{
        leftNavItem1 = <li className="nav-item dropdown">
            <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Hoạt động
            </NavLink>
            <ul className="dropdown-menu">
                <li>
                    <NavLink className="dropdown-item" to="/feed/event">
                        Sự kiện
                    </NavLink>
                </li>
                <li>
                    <NavLink className="dropdown-item" to="/feed/review">
                        Review
                    </NavLink>
                </li>
            </ul>
        </li>
        leftNavItem2 = <li className="nav-item">
            <NavLink className="nav-link" to="/library">
                Thư viện
            </NavLink>
        </li>

        if (authInfo.isLogin){
            rightNavItem1 = <li className="nav-item">
                <NavLink className="nav-link" to="/bookBorrow">
                    Mượn sách
                </NavLink>
            </li>
            rightNavItem2 = <li className="nav-item dropdown">
                <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Thông tin
                </NavLink>
                <ul className="dropdown-menu">
                    {authInfo.isAdmin && !authInfo.isAdminMode && <li>
                        <NavLink className="dropdown-item" to="/">
                            Trang quản trị viên
                        </NavLink>
                    </li>}
                    <li>
                        <NavLink className="dropdown-item" to="/my">
                            Thông tin cá nhân
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/my/borrow/list">
                            Danh sách đăng kí mượn
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/my/borrow/history">
                            Lịch sử mượn
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/my/feed/review">
                            Sách đã quyên góp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/my/post/reviewHistory">
                            Danh sách review đã gửi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="dropdown-item" to="/logout">
                            Đăng xuất
                        </NavLink>
                    </li>
                </ul>
            </li>
        }
        else {
            rightNavItem1 = <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                    Đăng kí
                </NavLink>
            </li>
            rightNavItem2 = <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                    Đăng nhập
                </NavLink>
            </li>
        }
    }
    

    return (
        <nav className="navbar container-fluid">
            <ul className="navmenu me-auto mb-lg-0">
                {leftNavItem1}
                {leftNavItem2}
                <li className="nav-item navbar-brand">
                    <NavLink className="nav-link" to="/">
                        <img src={logo} id="logo"></img>
                    </NavLink>
                </li>
                {rightNavItem1}
                {rightNavItem2}
            </ul>
        </nav>
    )

}