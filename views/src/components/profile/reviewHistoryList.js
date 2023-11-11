import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

import dummyUserData from "./dummyUserData";

export default function ReviewHistoryList(){
    const reviewData = dummyUserData.userData.userReview.reviewData
    return(
        <main className="container p-3" style={{maxWidth: '960px'}}>
            <h1>Lịch sử review</h1>
            <div className="mt-2">
                <button className="btn btn-primary">
                    <FaUpload className="mr-2" /> Gửi bài review
                </button>
            </div>
            <div>
                <table className="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Ngày gửi bài</th>
                            <th scope="col">Tên tác phẩm review</th>
                            <th scope="col">Trạng thái duyệt</th>
                            <th scope="col">Ngày cập nhật</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviewData &&
                            reviewData.map((doc) => (
                                <tr>
                                    <td>{doc.sendDate}</td>
                                    <td><Link key={doc.id} to={`/my/post/reviewHistory/reviewDetail/${doc.id}`}>{doc.bookName}
                                    </Link></td>
                                    <td>{doc.status}</td>
                                    <td>{doc.updateDate}</td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </main>
    )
}