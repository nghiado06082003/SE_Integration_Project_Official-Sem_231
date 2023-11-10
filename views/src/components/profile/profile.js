import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";
import UserInfor from "./userInfor";

export default function ProFile(){
    return (
        <main className="container">
            <UserInfor/>
            <section className="additionInfo mt-3 pt-3 pb-3 ps-5">
                <h3>Các thông tin khác</h3>
                <table className="table" style={{width: '50%'}}>
                    <tbody>
                        <tr>
                            <td>Sách đăng kí mượn:</td>
                            <td> Đang chờ duyệt 2</td>
                        </tr>
                        <tr>
                            <td>Lịch sử mượn:</td>
                            <td>Chưa trả 1</td>
                        </tr>
                        <tr>
                            <td>Quyên góp sách:</td>
                            <td>Đã quyên góp 2</td>
                        </tr>
                        <tr>
                            <td>Số lượng bài review:</td>
                            <td>Đang chờ duyệt 1</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}