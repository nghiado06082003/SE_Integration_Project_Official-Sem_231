import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";


import profileImg from "../../img/profileImg.png"
import dummyUserData from "./dummyUserData";

export default function UserInfor(){
    return (
        <div className="row justify-content-around mt-4 align-items-center">
            <div className="profileImg col-4">
                <img src={profileImg} style={{ maxWidth: '300px', maxHeight: '300px' }}></img>
            </div>
            <div className="userInfor p-2 col-5">
                <h3 className="p-2 mt-3">Thông tin người dùng</h3>
                <table className="p-2 table">
                    <tbody>
                        <tr>
                            <th scope="row">Mã số sinh viên:</th>
                            <td>{dummyUserData.userData.userInfor.student_id}</td>
                        </tr>
                        <tr>
                            <th scope="row">Họ và tên:</th>
                            <td>{dummyUserData.userData.userInfor.student_name}</td>
                        </tr>
                        <tr>
                            <th scope="row">Email:</th>
                            <td>{dummyUserData.userData.userInfor.email}</td>
                        </tr>
                        <tr>
                            <th scope="row">Ngày tham gia:</th>
                            <td>{dummyUserData.userData.userInfor.join_date}</td>
                        </tr>
                        <tr>
                            <th scope="row">Quyền thành viên:</th>
                            <td>{dummyUserData.userData.userInfor.permission}</td>
                        </tr>
                        <tr>
                            <th scope="row">Tình trạng</th>
                            <td>{dummyUserData.userData.userInfor.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}