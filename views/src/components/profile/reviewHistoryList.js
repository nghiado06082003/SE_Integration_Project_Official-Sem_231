import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";

import dummyUserData from "./dummyUserData";

export default function ReviewHistoryList(){

    const dummyDetail = dummyUserData.userData.userReview.reviewData[0]

    return(
        <main>
            <h1>Chi tiết bài review về {dummyDetail.bookName}</h1>
            <section className="post-meta">
                <div>Tác giả: {dummyDetail.author}</div>
                <time>Ngày gửi: {dummyDetail.sendDate}</time> |
                <div>Trạng thái: {dummyDetail.status}</div>
            </section>
            <hr></hr>
            <section className="post-detail">
                <p>{dummyDetail.reviewDescription}</p>
            </section>
            {dummyDetail.clubComment && <section className="club-comment">
                <h3>Bình luận của câu lạc bộ</h3>
                <p>{dummyDetail.clubComment}</p>
            </section>}
        </main>
    )
}