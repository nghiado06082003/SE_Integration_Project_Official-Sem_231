import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, Navigate } from "react-router-dom";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios'
import { useState, useEffect } from "react";
import Header from '../shared/header';
import Cookies from "universal-cookie";
const cookies = new Cookies();

function PrivateRoutes(validateRoute) {
    const token = cookies.get("TOKEN");
    if (!token) {
        return <Navigate to={"/signin"} />;
    }
    else {
        let url = "/api/" + validateRoute + "/authorization";
        axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((respond) => {
            return <Outlet />;
        }).catch((error) => {
            return <Navigate to={"/signin"} />;
        })
    }
}

export default PrivateRoutes;