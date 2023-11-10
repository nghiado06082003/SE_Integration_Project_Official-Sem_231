import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import hero from '../../img/hero.png'
import { useState } from "react";
import "./hero.css"


export default function Hero(){
    return (
        <div className="hero">
            
            <img className="heroImg" src={hero}></img>

        </div>
    )




}