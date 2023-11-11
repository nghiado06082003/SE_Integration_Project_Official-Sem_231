import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useParams } from "react-router-dom";
import { useState } from "react";

import dummyUserData from "./dummyUserData";

export default function ReviewDetail(){
    const { review_id } = useParams();
    const dummyDetail = dummyUserData.userData.userReview.reviewData.find((doc) => doc.id === parseInt(review_id, 10));
    console.log(dummyDetail)
    if (!dummyDetail) {
        return <div>Document not found</div>;
    }
    return(
        <main className="container p-3" style={{maxWidth: '960px'}}>
            <h1>Chi tiết bài review</h1>
            <h2 className="m-0">Tựa tác phẩm: {dummyDetail.bookName}</h2>
            <section className="post-meta d-flex p-1">
                <div className="me-2">Tác giả: {dummyDetail.author}</div>
                <time className="me-2">Ngày gửi: {dummyDetail.sendDate}</time>
                <div>Trạng thái: {dummyDetail.status}</div>
            </section>
            <hr></hr>
            <section className="post-detail">
                <p>{dummyDetail.reviewDescription}</p>
            </section>
            <hr></hr>
            {dummyDetail.clubComment && <section className="club-comment">
                <h4>Bình luận của câu lạc bộ</h4>
                <p>{dummyDetail.clubComment}</p>
            </section>}
        </main>
    )
}