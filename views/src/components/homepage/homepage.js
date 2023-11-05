import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios'
import { useState, useEffect } from "react";

function Homepage() {
    const [greetingFromServer, setGreetingFromServer] = useState(null);
    useEffect(() => {
        axios.get('/api/homepage').then(
            (respond) => { setGreetingFromServer(respond.data.greeting) }
        )
    }, []);
    return (
        <>
            <h1>Đây là trang chủ</h1>
            <h6>{!greetingFromServer ? "Đang tải, chờ server chút...": greetingFromServer}</h6>
        </>
    );
}
export default Homepage